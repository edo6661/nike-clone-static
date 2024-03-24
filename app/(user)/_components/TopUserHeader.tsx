import React from "react";
import LinksUserHeader from "./LinksUserHeader";
import Image from "next/image";
import LogoTopUserHeader from "./LogoTopUserHeader";
import { getBanner } from "@/services/banner";

const TopUserHeader = async () => {
  const banner = await getBanner();
  return (
    <div className=" primary-bg hidden md:block">
      <div className="fl-ic container justify-between gap-4">
        <LogoTopUserHeader {...banner!} />
        <LinksUserHeader />
      </div>
    </div>
  );
};

export default TopUserHeader;
