import React from "react";
import UserHeader from "./_components/UserHeader";
import UserFooter from "./_components/UserFooter";

const LayoutUser = ({ children }: ChildrenType) => {
  return (
    <>
      <UserHeader />
      <main className="min-h-screen">{children}</main>
      <UserFooter />
    </>
  );
};

export default LayoutUser;
