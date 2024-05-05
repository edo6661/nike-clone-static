"use client";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { Heading } from "@/components/custom/heading";
import { useNavState } from "@/lib/zustand";
import {
  doubleMobileHeaderVars,
  mobileHeaderVars,
} from "@/lib/framer-motion/mobileHeader";
import { ChevronRight } from "lucide-react";
import MobileButtonHeaderLinks from "./MobileButtonHeaderLinks";

const MobileUserHeaderSubLinks = () => {
  const {
    selectedLinksHeader,
    selectedLinkHeader,
    trueSelectedLinksSubHeader,
    selectedSubLinkHeader,
  } = useNavState((state) => state);

  const checker = selectedLinkHeader && !selectedSubLinkHeader;

  const firstSwipe = selectedLinkHeader && !selectedSubLinkHeader;

  const vars = {
    initial: {
      x: firstSwipe ? "100%" : "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
    transition: {
      ease: "easeInOut",
    },
  };

  return (
    <AnimatePresence>
      {checker &&
        selectedLinksHeader.map((link, i) => (
          <div key={link.title} className="absolute inset-0  ">
            {selectedLinkHeader === link.title && (
              <motion.div {...vars}>
                <Heading as="h4" className="pb-4">
                  {selectedLinkHeader}!
                </Heading>
                <div className="space-y-4">
                  {link.items.map((item) => (
                    <div key={item.header} className="space-y-2">
                      <MobileButtonHeaderLinks
                        label={item.header}
                        actions={trueSelectedLinksSubHeader}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
    </AnimatePresence>
  );
};

export default MobileUserHeaderSubLinks;
