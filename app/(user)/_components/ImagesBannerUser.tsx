import { imagesBanner } from "@/constants/banner";
import { Content } from "@prisma/client";

import { motion } from "framer-motion";

interface ImagesBannerUserProps {
  imgIndex: number;
  dragging: boolean;
  content: Content;
}

const ImagesBannerUser = ({
  imgIndex,
  dragging,
  content,
}: ImagesBannerUserProps) => {
  return content.images.map((image, i) => {
    const isCurrentIndex = imgIndex === i;
    const scale = isCurrentIndex ? 1 : 0.8;
    const blur = isCurrentIndex && dragging ? 12 : 0;
    const grayscale = isCurrentIndex && dragging ? 100 : 0;

    return (
      <motion.div
        key={image}
        style={{
          backgroundImage: `url(${image})`,
        }}
        animate={{
          scale: scale,
          filter: `blur(${blur}px) grayscale(${grayscale}%)`,
        }}
        transition={{
          duration: 0.5,
        }}
      />
    );
  });
};

export default ImagesBannerUser;
