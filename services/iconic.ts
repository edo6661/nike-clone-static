import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getIconic = async () => {
  try {
    return await db.iconic.findFirst({
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
