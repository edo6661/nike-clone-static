import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getRelevant = async () => {
  try {
    return await db.relevant.findFirst({
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
