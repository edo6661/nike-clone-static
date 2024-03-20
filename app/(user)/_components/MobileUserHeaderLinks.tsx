"use client";
import { reverseMobileHeaderVars } from "@/lib/framer-motion/mobileHeader";
import { useGlobalState } from "@/lib/zustand";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";
import MobileButtonHeaderLinks from "./MobileButtonHeaderLinks";

const MobileUserHeaderLinks = () => {
  const {
    selectedLinksHeader,
    trueSelectedLinksHeader,
    selectedLinkHeader,
    selectedSubLinkHeader,
  } = useGlobalState((state) => state);

  return (
    <AnimatePresence>
      {!selectedLinkHeader && !selectedSubLinkHeader && (
        <motion.div
          className="absolute  inset-0 space-y-8"
          {...reverseMobileHeaderVars}
        >
          {selectedLinksHeader.map((link, i) => (
            <motion.div key={link.title}>
              <MobileButtonHeaderLinks
                label={link.title}
                actions={trueSelectedLinksHeader}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileUserHeaderLinks;
