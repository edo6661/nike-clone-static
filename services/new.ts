import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getNew = async () => {
  try {
    return await db.new.findFirst({
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
