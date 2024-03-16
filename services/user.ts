import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getUserById = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to get user by id");
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({
      where: {
        email,
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to get user by email");
  }
};
