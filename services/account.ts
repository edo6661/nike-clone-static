import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getAccountByUserId = async (userId: string) => {
  try {
    return await db.account.findFirst({
      where: {
        userId,
      },
    });
  } catch (err) {
    errorHandler(err, "Error getting account by user id");
  }
};
