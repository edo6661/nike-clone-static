import React from "react";
import { Separator } from "./ui/separator";

const VerticalSeparator = () => {
  return (
    <Separator
      orientation="vertical"
      className="hidden h-[2px] w-full bg-primarySlate shadow-2xl shadow-muted dark:bg-primaryLightBg md:block"
    />
  );
};

export default VerticalSeparator;
