"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ImagesBannerUser from "./ImagesBannerUser";
import { Button } from "@/components/ui/button";
import { AUTO_INTERVAL, DRAG_BUFFER } from "@/constants";
import { imagesBanner } from "@/constants/banner";
const BannerUser = (
) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  const onDragStart = () => setDragging(true);
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();

    // ! kalo di drag ke kiri atau kanan lebih dari 50px, maka image nya bakal berpindah
    if (x <= -DRAG_BUFFER) {
      if (imgIndex === imagesBanner.length - 1) return;
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER) {
      if (imgIndex === 0) return;
      setImgIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0)
        setImgIndex((prev) =>
          prev === imagesBanner.length - 1 ? 0 : prev + 1,
        );
    }, AUTO_INTERVAL);
    return () => clearInterval(intervalRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragX]);

  return (
    <motion.div className="wrapper-banner ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >

        <ImagesBannerUser
          imgIndex={imgIndex}
          dragging={dragging}
        />
      </motion.div>
      {/* <Dots setImgIndex={setImgIndex} content={content} imgIndex={imgIndex} /> */}
    </motion.div>
  );
};
interface DotsProps {
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  imgIndex: number;
}
export const Dots = ({ setImgIndex, imgIndex,
}
  : DotsProps) => {
  return (
    <div className="fl-ic absolute bottom-12 left-1/2 -translate-x-1/2 justify-center gap-4">
      {imagesBanner.map((_, i) => {
        const activeIndex = i === imgIndex;
        return (
          <Button
            key={i}
            onClick={() => setImgIndex(i)}
            disabled={activeIndex}
            variant="hoverIcon"
            size="icon"
            className="primary-bg z-10 size-5 "
          />
        );
      })}
    </div>
  );
};

export default BannerUser;
