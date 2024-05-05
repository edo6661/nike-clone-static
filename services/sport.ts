import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getSport = async () => {
  try {
    return await db.sport.findFirst({
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
    errorHandler(err, "Failed to fetch new Product");
  }
};
