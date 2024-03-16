import React from "react";
import { Separator } from "./ui/separator";

const VerticalSeparator = () => {
  return (
    <Separator
      orientation="vertical"
      className="bg-primarySlate h-[2px] w-full shadow-2xl shadow-muted dark:bg-primaryLightBg"
    />
  );
};

export default VerticalSeparator;
