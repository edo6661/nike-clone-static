"use client";
import { imagesBanner } from "@/constants/banner";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import ImagesBannerUser from "./ImagesBannerUser";

const DRAG_BUFFER = 50;
const AUTO_INTERVAL = 5000;

const BannerUser = () => {
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
  }, [dragX]);

  return (
    <motion.div className="wrapper-banner">
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
        <ImagesBannerUser imgIndex={imgIndex} dragging={dragging} />
      </motion.div>
      {/* <Dots setImgIndex={setImgIndex} imgIndex={imgIndex} /> */}
    </motion.div>
  );
};

export default BannerUser;
