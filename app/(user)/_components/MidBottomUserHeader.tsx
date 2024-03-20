"use client";
import { Heading } from "@/components/custom/heading";
import { cn } from "@/lib/utils";
import { useGlobalState } from "@/lib/zustand";
import { AnimatePresence, motion } from "framer-motion";

const MidBottomUserHeader = () => {
  const {
    selectedLinksHeader,
    trueSelectedLinksHeader,
    falseSelectedLinksHeader,
    selectedLinkHeader,
  } = useGlobalState((state) => state);
  return (
    <div className=" container-nav-links">
      <div className=" p-2 ">
        <ul className="fl-ic select-none">
          {selectedLinksHeader.map((item, i) => {
            return (
              <li
                className="relative p-4"
                key={item.title}
                onMouseEnter={() => trueSelectedLinksHeader(item.title)}
                onMouseLeave={() => falseSelectedLinksHeader(item.title)}
              >
                <Heading
                  as="h5"
                  size="sm"
                  className={cn("truncate text-lg font-bold", {
                    "links-hover": item.title === selectedLinkHeader,
                  })}
                >
                  {item.title}
                </Heading>
                <AnimatePresence>
                  {item.title === selectedLinkHeader ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MidBottomUserHeader;
