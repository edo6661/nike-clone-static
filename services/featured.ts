import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getFeatured = async () => {
  try {
    return await db.featured.findFirst({
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
