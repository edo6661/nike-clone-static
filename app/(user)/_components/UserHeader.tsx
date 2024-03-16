import React from "react";
import { Separator } from "@/components/ui/separator";
import TopUserHeader from "./TopUserHeader";
import BottomUserHeader from "./BottomUserHeader";
import VerticalSeparator from "@/components/VerticalSeparator";
const UserHeader = () => {
  return (
    <header>
      <TopUserHeader />
      <VerticalSeparator />
      <BottomUserHeader />
    </header>
  );
};

export default UserHeader;
