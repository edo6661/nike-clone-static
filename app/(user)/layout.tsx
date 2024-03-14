import Footer from "@/components/Footer";
import React from "react";
import UserHeader from "./_components/UserHeader";

const LayoutUser = ({ children }: ChildrenType) => {
  return (
    <>
      <UserHeader />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutUser;
