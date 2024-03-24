import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getBanner = async () => {
  try {
    return await db.banner.findFirst({
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
    errorHandler(err, "Failed to get banner");
  }
};
