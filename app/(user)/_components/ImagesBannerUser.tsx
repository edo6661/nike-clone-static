import { imagesBanner } from "@/constants/banner";

import { motion } from "framer-motion";

interface ImagesBannerUserProps {
  imgIndex: number;
  dragging: boolean;
}

const ImagesBannerUser = ({
  imgIndex,
  dragging,
}: ImagesBannerUserProps) => {
  return imagesBanner.map((image, i) => {
    const isCurrentIndex = imgIndex === i;
    const scale = isCurrentIndex ? 1 : 0.8;
    const blur = isCurrentIndex && dragging ? 12 : 0;
    const grayscale = isCurrentIndex && dragging ? 100 : 0;

    return (
      <motion.div
        key={image.image}
        style={{
          backgroundImage: `url(${image.image})`,
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
