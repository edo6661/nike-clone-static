import { db } from "@/lib/db";
import { getVerificationTokenByEmail } from "@/services/verification";
import { v4 as uuid } from "uuid";
import { expiresAt } from "./expiresAt";
import crypto from "crypto";
import { getTwoFactorTokenByEmail } from "@/services/twoFactor";
export const generateVerificationToken = async (email: string) => {
  const token = uuid();

  const tokenExist = await getVerificationTokenByEmail(email);

  if (tokenExist)
    await db.verificationToken.delete({ where: { id: tokenExist.id } });

  return await db.verificationToken.create({
    data: {
      email,
      token,
      expiresAt,
    },
  });
};
export const generatePasswordResetToken = async (email: string) => {
  const token = uuid();

  const passwordResetTokenExist = await db.passwordResetToken.findFirst({
    where: {
      email,
    },
  });

  if (passwordResetTokenExist)
    await db.passwordResetToken.delete({
      where: { id: passwordResetTokenExist.id },
    });

  return await db.passwordResetToken.create({
    data: {
      email,
      token,
      expiresAt,
    },
  });
};

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  const tokenExist = await getTwoFactorTokenByEmail(email);
  if (tokenExist) {
    await db.twoFactorToken.delete({ where: { id: tokenExist.id } });
  }
  return await db.twoFactorToken.create({
    data: {
      email,
      token,
      expiresAt,
    },
  });
};
