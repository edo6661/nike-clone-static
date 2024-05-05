"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  headerItemsVariants,
  useHeaderVars,
  headerParentTransition,
} from "@/lib/framer-motion/header";
import { Heading } from "@/components/custom/heading";
import { useNavState } from "@/lib/zustand";
import Link from "next/link";

const BottomUserHeaderHovered = () => {
  const {
    selectedLinksHeader,
    selectedLinkHeader,
    falseSelectedLinksHeader,
    trueSelectedLinksHeader,
  } = useNavState();

  return selectedLinksHeader.map((item) => (
    <motion.div
      key={item.title}
      className="primary-bg  absolute left-0 right-0  z-10 hidden rounded-b-2xl md:block"
      initial={{ height: 0 }}
      animate={{
        height: selectedLinkHeader === item.title ? 620 : 0,
        transition: headerParentTransition,
      }}
      onMouseEnter={() => trueSelectedLinksHeader(item.title)}
      onMouseLeave={() => falseSelectedLinksHeader(item.title)}
    >
      <div className="container">
        <AnimatePresence>
          {item.title === selectedLinkHeader && (
            <motion.div className="flex justify-evenly">
              {item.items.map((item, i) => {
                return (
                  <motion.div
                    key={item.header}
                    {...useHeaderVars}
                    variants={headerItemsVariants}
                    className="pt-4"
                  >
                    <Link
                      href={`/category/${item.header}`}
                      className="hover-link-primary"
                    >
                      <Heading size="sm">{item.header}</Heading>
                    </Link>
                    <div className="flex flex-col">
                      {item.subItems.map((item, i) => (
                        <Link
                          className="hover-link-primary"
                          href={`/category/sub/${item}`}
                          key={item}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  ));
};

export default BottomUserHeaderHovered;
