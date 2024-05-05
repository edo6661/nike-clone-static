import React from "react";
import LinksUserHeader from "./LinksUserHeader";
import Image from "next/image";
import LogoTopUserHeader from "./LogoTopUserHeader";
import { getLogo } from "@/services/logo";

const TopUserHeader = async () => {
  const logo = await getLogo();
  return (
    <div className=" primary-bg hidden md:block">
      <div className="fl-ic container justify-between gap-4">
        <LogoTopUserHeader {...logo!} />
        <LinksUserHeader />
      </div>
    </div>
  );
};

export default TopUserHeader;
