"use client";
import BottomUserHeaderSearch from "./BottomUserHeaderSearch";
import { Button } from "@/components/ui/button";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import UserButton from "@/components/UserButton";
import MobileBottomUserHeaderSearch from "./MobileBottomUserHeaderSearch";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import UserMobileMenu from "./UserMobileMenu";
const BottomUserHeaderActions = () => {
  const [isNav, setIsNav] = useState(false);
  const handleNav = () => setIsNav((prev) => !prev);

  return (
    <>
      <div className="fl-ic justify-between gap-4">
        <BottomUserHeaderSearch />
        <MobileBottomUserHeaderSearch />
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
      </div>
      <UserMobileMenu setIsNav={setIsNav} isNav={isNav} handleNav={handleNav} />
    </>
  );
};

export default BottomUserHeaderActions;
