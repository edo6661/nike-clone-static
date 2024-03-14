import React from "react";
import { Separator } from "@/components/ui/separator";
import TopUserHeader from "./TopUserHeader";
import BottomUserHeader from "./BottomUserHeader";
const UserHeader = () => {
  return (
    <header>
      <TopUserHeader />
      <Separator
        orientation="vertical"
        className="h-[2px] w-full bg-slate-500/40 shadow-2xl shadow-muted dark:bg-primaryLightBg"
      />
      <BottomUserHeader />
    </header>
  );
};

export default UserHeader;
