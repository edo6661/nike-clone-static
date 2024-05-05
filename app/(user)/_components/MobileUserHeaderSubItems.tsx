"use client";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { Heading } from "@/components/custom/heading";
import { useNavState } from "@/lib/zustand";
import {
  mobileHeaderVars,
  reverseMobileHeaderVars,
} from "@/lib/framer-motion/mobileHeader";

const MobileUserHeaderSubItems = () => {
  const { selectedSubLinkHeader, selectedLinksHeader, selectedLinkHeader } =
    useNavState((state) => state);

  const checker = selectedLinkHeader && selectedSubLinkHeader;

  return (
    <AnimatePresence>
      {checker &&
        selectedLinksHeader.map((link, i) => (
          <div key={link.title} className="absolute inset-0  ">
            {selectedLinkHeader === link.title && (
              <motion.div {...mobileHeaderVars}>
                <div className="space-y-4">
                  {link.items.map((item) => (
                    <div key={item.header} className="space-y-2">
                      {item.header === selectedSubLinkHeader && (
                        <>
                          <Heading as="h4" className="pb-4">
                            {selectedSubLinkHeader}
                          </Heading>
                          <div className="base-description space-y-1">
                            {item.subItems.map((item) => (
                              <p key={item}>{item}</p>
                            ))}
                          </div>
                        </>
                      )}
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

export default MobileUserHeaderSubItems;
