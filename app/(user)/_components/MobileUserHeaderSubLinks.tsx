"use client";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { Heading } from "@/components/custom/heading";
import { useGlobalState } from "@/lib/zustand";
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
  } = useGlobalState((state) => state);

  const checker = selectedLinkHeader && !selectedSubLinkHeader;

  return (
    <AnimatePresence>
      {checker &&
        selectedLinksHeader.map((link, i) => (
          <div key={link.title} className="absolute inset-0  ">
            {selectedLinkHeader === link.title && (
              <motion.div {...doubleMobileHeaderVars}>
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
