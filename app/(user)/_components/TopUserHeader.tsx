import React from "react";
import LinksUserHeader from "./LinksUserHeader";
import Image from "next/image";
import LogoTopUserHeader from "./LogoTopUserHeader";

const TopUserHeader = () => {
  return (
    <div className=" bg-primaryLightBg  dark:bg-primaryDarkBg">
      <div className="fl-ic container justify-between gap-4">
        <LogoTopUserHeader />
        <LinksUserHeader />
      </div>
    </div>
  );
};

export default TopUserHeader;
