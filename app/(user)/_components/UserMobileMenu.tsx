"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/ToggleTheme";
import { useGlobalState } from "@/lib/zustand";
import BottomUserHeaderHovered from "./BottomUserHeaderHovered";
import {
  mobileHeaderVars,
  reverseMobileHeaderVars,
} from "@/lib/framer-motion/mobileHeader";
import MobileUserHeaderLinks from "./MobileUserHeaderLinks";
import { Heading } from "@/components/custom/heading";
import MobileUserHeaderSubLinks from "./MobileUserHeaderSubLinks";
import MobileUserHeaderSubItems from "./MobileUserHeaderSubItems";
import { useWindowSize } from "usehooks-ts";

interface UserMobileMenuProps {
  isNav: boolean;
  handleNav: () => void;
  setIsNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserMobileMenu = ({
  isNav,
  handleNav,
  setIsNav,
}: UserMobileMenuProps) => {
  const {
    selectedSubLinkHeader,
    setSelectedSubLinkHeader,
    setSelectedLinkHeader,
    selectedLinkHeader,
    selectedLinksHeader,
  } = useGlobalState((state) => state);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsNav(false);
    }
  }, [width, setIsNav]);

  // console.log("SELECTED LINK HEADER", selectedLinkHeader);
  // console.log("SELECTED SUB LINK HEADER", selectedSubLinkHeader);

  return (
    <>
      <div
        className={cn("hidden", {
          "fixed inset-0 z-10 block bg-black opacity-50": isNav,
        })}
      />

      <AnimatePresence>
        {isNav && (
          <motion.div
            className="container-mobile-nav overflow-x-hidden"
            {...mobileHeaderVars}
            layout
          >
            <motion.div layout className="space-y-8 px-8 py-6">
              <motion.div layout className="fl-ic justify-between ">
                <motion.span>
                  <ToggleTheme />
                </motion.span>

                <Button
                  size="icon"
                  variant="hoverIcon"
                  type="submit"
                  onClick={() =>
                    selectedLinkHeader && selectedSubLinkHeader
                      ? setSelectedSubLinkHeader(null)
                      : selectedLinkHeader
                        ? setSelectedLinkHeader(null)
                        : selectedSubLinkHeader
                          ? setSelectedSubLinkHeader(null)
                          : setIsNav(false)
                  }
                  // ! untuk orang lemah
                  // onClick={() => {
                  //   if (selectedLinkHeader && selectedSubLinkHeader) {
                  //     return setSelectedSubLinkHeader(null);
                  //   }
                  //   if (selectedLinkHeader) {
                  //     return setSelectedLinkHeader(null);
                  //   } else if (selectedSubLinkHeader) {
                  //     return setSelectedSubLinkHeader(null);
                  //   } else {
                  //     setIsNav(false);
                  //   }
                  // }}
                >
                  <AnimatePresence>
                    {!selectedLinkHeader && (
                      <motion.span {...reverseMobileHeaderVars}>
                        <X size={20} />
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {selectedLinkHeader && (
                      <motion.span {...mobileHeaderVars}>
                        <ChevronLeft size={20} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
              <div className="relative">
                <MobileUserHeaderSubLinks />
                <MobileUserHeaderSubItems />
                <MobileUserHeaderLinks />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserMobileMenu;
