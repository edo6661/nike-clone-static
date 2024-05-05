"use client";
import BottomUserHeaderSearch from "./BottomUserHeaderSearch";
import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import UserButton from "@/components/UserButton";
import MobileBottomUserHeaderSearch from "./MobileBottomUserHeaderSearch";
import { useEffect, useState } from "react";
import UserMobileMenu from "./UserMobileMenu";
import { useSearch } from "@/lib/zustand/useSearch";
import { basicMotionProps, existVars } from "@/lib/framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useWindowSize } from "usehooks-ts";
const BottomUserHeaderActions = () => {
  const [isNav, setIsNav] = useState(false);
  const handleNav = () => setIsNav((prev) => !prev);
  const { setIsSearch, isSearch } = useSearch((state) => state);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) setIsSearch(false);
  }, [width, setIsSearch]);

  return (
    // TODO kalo search true bakal ke kiri dan ada input
    <>
      <motion.div
        layout
        className={cn("fl-ic justify-between gap-4", {
          "flex-1": isSearch,
        })}
      >
        <motion.div
          layout
          className={cn("relative block   w-full flex-1 md:hidden", {
            "h-[72px]": isSearch,
          })}
        >
          <MobileBottomUserHeaderSearch />
        </motion.div>
        <AnimatePresence initial={false}>
          {!isSearch && (
            <motion.div
              className="fl-ic justify-between gap-4"
              variants={existVars}
              {...basicMotionProps}
              layout
            >
              <BottomUserHeaderSearch />
              <Button size="icon" variant="hoverIcon" type="submit">
                <Link href="/wishlist">
                  <Heart size={20} />
                </Link>
              </Button>
              <Button size="icon" variant="hoverIcon" type="submit">
                <Link href="/cart">
                  <ShoppingBag size={20} />
                </Link>
              </Button>
              <div className="fl-ic gap-4 md:hidden ">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <Button
                  size="icon"
                  variant="hoverIcon"
                  type="submit"
                  onClick={handleNav}
                >
                  <Menu size={20} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <UserMobileMenu setIsNav={setIsNav} isNav={isNav} handleNav={handleNav} />
    </>
  );
};

export default BottomUserHeaderActions;
