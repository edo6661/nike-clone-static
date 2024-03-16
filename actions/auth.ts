"use server";
import { signIn, signOut, unstable_update } from "@/auth";
import { revalidateNextAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendTwoFactorEmail, sendVerificationEmail } from "@/lib/resend";
import {
  LoginSchemaType,
  RegisterSchemaType,
  loginSchema,
  registerSchema,
} from "@/lib/zod/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import {
  getTwoFactorByUserId,
  getTwoFactorTokenByEmail,
} from "@/services/twoFactor";
import { getUserByEmail } from "@/services/user";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/utils/tokens";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

export const register = async (data: RegisterSchemaType) => {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, name, password, confirmPassword } = validatedFields.data;

  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
  });
  const existingName = await db.user.findUnique({
    where: {
      name,
    },
  });
  if (existingEmail) return { error: "User already exists" };
  if (existingName) return { error: "Name already exists" };
  if (password !== confirmPassword) return { error: "Passwords do not match" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(email, verificationToken.token);
  return { success: "Confirmation Email Sent!" };
};
export const login = async (data: LoginSchemaType) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, code } = validatedFields.data;

  const userExist = await getUserByEmail(email);

  if (!userExist || !userExist.email || !userExist.password)
    return { error: "Email does'nt exist!" };

  // ! bikin token ulang jika belum verified, karena token bakal expired setelah 1 jam user register
  if (!userExist.emailVerified) {
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    );
    return { success: "Email not verified! Confirmation Email Sent!" };
  }

  if (userExist.isTwoFactorEnabled && userExist.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(userExist.email);
      if (!twoFactorToken) return { error: "Token does'nt exist!" };

      if (twoFactorToken.token !== code) return { error: "Invalid code!" };

      const hasExpired = new Date(twoFactorToken.expiresAt) < new Date();
      if (hasExpired) return { error: "Token has expired!" };

      await db.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id,
        },
      });

      const existingTwoFactor = await getTwoFactorByUserId(userExist.id);

      if (existingTwoFactor) {
        await db.twoFactorConfirmation.delete({
          where: {
            id: existingTwoFactor.id,
          },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: userExist.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(userExist.email);
      await sendTwoFactorEmail(userExist.email, twoFactorToken.token);

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    revalidateNextAuthSession(userExist);
  } catch (error) {
    if (error instanceof AuthError) {
      return error.type === "CredentialsSignin"
        ? { error: "Invalid email or password!" }
        : { error: "Something went wrong! Please try again later." };
    }
  }
};

export const logout = async () => await signOut();
