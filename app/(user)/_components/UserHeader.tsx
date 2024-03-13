import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "@/components/ToggleTheme";
import { Separator } from "@/components/ui/separator";
import LinksUserHeader from "./LinksUserHeader";
import TopUserHeader from "./TopUserHeader";
import BottomUserHeader from "./BottomUserHeader";
const UserHeader = () => {
  return (
    <header>
      <TopUserHeader />
      <Separator
        orientation="vertical"
        className=" h-[2px] w-full bg-slate-500/40 shadow-2xl shadow-muted dark:bg-primaryLightBg"
      />
      <BottomUserHeader />
    </header>
  );
};

export default UserHeader;
