import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getLogo = async () => {
  try {
    return db.logo.findFirst({
      where: {
        content: {
          isActive: true,
        },
      },
      include: {
        content: true,
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to get logo");
  }
};
