"use client";
import { Heading } from "@/components/custom/heading";
import { topFooterItems } from "@/constants/userHomepage";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdOutlineExpandMore } from "react-icons/md";
import { cn } from "@/lib/utils";
import { useWindowSize } from "usehooks-ts";
import useIsClient from "@/hooks/useIsClient";

const FirstUserFooter = () => {
  const [expand, setExpand] = useState(false);
  const { width } = useWindowSize();
  const client = useIsClient();

  const toggleExpand = () => setExpand((prev) => !prev);

  const sliceItemBasedOnHover = (items: string[]) =>
    expand ? items : items.slice(0, 4);
  const topFooterItemsBasedOnWidth = client
    ? width < 600
      ? topFooterItems.slice(0, 2)
      : topFooterItems
    : [];

  return (
    <>
      <motion.div layout className="container-first-footer ">
        {topFooterItemsBasedOnWidth.map((item) => (
          <motion.div layout key={item.title}>
            <Heading as="h6" size="sm">
              {item.title}
            </Heading>
            <motion.ul layout>
              {sliceItemBasedOnHover(item.items).map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
      <Button
        size="icon"
        variant="hoverIcon"
        className="mx-auto min-h-16 w-full rounded-none"
        onClick={toggleExpand}
      >
        <MdOutlineExpandMore
          className={cn("base-transition", {
            "rotate-180": expand,
          })}
          size="42"
        />
      </Button>
    </>
  );
};

export default FirstUserFooter;
