"use client";

import { productAlwaysIconicItems } from "@/constants/userHomepage";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface SwiperAlwaysIconicProductsProps {
  title: string;
  imageUrl: string;
  i: number;
  currentIndex: number;
  dragging: boolean;
}
const SwiperAlwaysIconicProducts = ({
  title,
  imageUrl,
  i,
  currentIndex,
  dragging,
}: SwiperAlwaysIconicProductsProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const trueIsHovered = () => setIsHovered(true);
  const falseIsHovered = () => setIsHovered(false);

  const actualIndex = (i % productAlwaysIconicItems.length) + 1;

  return (
    <div onMouseEnter={trueIsHovered} onMouseLeave={falseIsHovered}>
      <Link
        href={`/product/${title}`}
        className={cn("", {
          "cursor-pointer": !dragging,
          "cursor-grab": dragging,
        })}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="hover-link-primary"
        />
        <AnimatePresence>
          {(currentIndex === i || isHovered) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring" }}
            >
              <span>
                {actualIndex} / {productAlwaysIconicItems.length}
              </span>
              <p>{title}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

export default SwiperAlwaysIconicProducts;
