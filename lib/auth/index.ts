import { auth, unstable_update } from "@/auth";
import { User } from "@prisma/client";

export const getCurrentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const revalidateNextAuthSession = (user: User) => {
  unstable_update({
    user: {
      ...user,
    },
  });
};
