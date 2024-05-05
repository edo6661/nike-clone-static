import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getAds = async () => {
  try {
    return await db.ads.findFirst({
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
