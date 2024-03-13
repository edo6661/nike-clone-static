import Footer from "@/components/Footer";
import React from "react";
import UserHeader from "./_components/UserHeader";

const LayoutUser = ({ children }: ChildrenType) => {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutUser;
