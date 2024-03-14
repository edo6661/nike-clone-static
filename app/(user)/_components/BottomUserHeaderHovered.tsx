"use client";
import { useGlobalState } from "@/lib/zustand";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  headerItemsVariants,
  useHeaderVars,
  headerParentTransition,
} from "@/lib/framer-motion/header";
import { Heading } from "@/components/custom/heading";

const BottomUserHeaderHovered = () => {
  const {
    selectedLinksHeader,
    selectedLinkHeader,
    falseSelectedLinksHeader,
    trueSelectedLinksHeader,
  } = useGlobalState();
  return selectedLinksHeader.map((item) => (
    <motion.div
      key={item.title}
      className="primary-bg  absolute left-0 right-0  z-10 rounded-b-2xl"
      initial={{ height: 0 }}
      animate={{
        height: selectedLinkHeader === item.title ? 400 : 0,
        transition: headerParentTransition,
      }}
      onMouseEnter={() => trueSelectedLinksHeader(item.title)}
      onMouseLeave={() => falseSelectedLinksHeader(item.title)}
    >
      <div className="container">
        <AnimatePresence>
          {item.title === selectedLinkHeader && (
            <motion.div className="flex justify-between">
              {item.items.map((item, i) => {
                return (
                  <motion.div
                    key={item.header}
                    {...useHeaderVars}
                    variants={headerItemsVariants}
                    className="pt-4"
                  >
                    <Heading size="sm">{item.header}</Heading>
                    <motion.div>
                      {item.subItems.map((item, i) => (
                        <motion.p
                          key={item}
                          {...useHeaderVars}
                          variants={headerItemsVariants}
                        >
                          {item}
                        </motion.p>
                      ))}
                    </motion.div>
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
