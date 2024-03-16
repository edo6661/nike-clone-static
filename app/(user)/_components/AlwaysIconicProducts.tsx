"use client";
import { Heading } from "@/components/custom/heading";
import { productAlwaysIconicItems } from "@/constants/userHomepage";
import React, { useState } from "react";
import SwiperAlwaysIconicProducts from "./SwiperAlwaysIconicProducts";
import { useMotionValue, motion } from "framer-motion";
import { DRAG_BUFFER } from "@/constants";

const WIDTH_ITEM = 300;

const AlwaysIconicProducts = () => {
  const mockInfiniteItems = [
    ...productAlwaysIconicItems,
    ...productAlwaysIconicItems,
    ...productAlwaysIconicItems,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);

  const onDragStart = () => setDragging(true);
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      setCurrentIndex((prev) => (prev + 1) % mockInfiniteItems.length);
    } else if (x >= DRAG_BUFFER) {
      if (currentIndex === 0) return;
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="container-always-iconic-products">
      <Heading>Always Iconic</Heading>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
          width: `${mockInfiniteItems.length * WIDTH_ITEM * 2}px`,
        }}
        animate={{
          translateX: `-${currentIndex * WIDTH_ITEM}px`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {mockInfiniteItems.map((product, i) => (
          <SwiperAlwaysIconicProducts
            i={i}
            key={i}
            {...product}
            currentIndex={currentIndex}
            dragging={dragging}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AlwaysIconicProducts;
