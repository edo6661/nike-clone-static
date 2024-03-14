import { Heading } from "@/components/custom/heading";
import React from "react";
import BannerUser from "./_components/BannerUser";

const UserHomepage = () => {
  return (
    <section>
      <BannerUser />
      <div className="container py-4">
        <Heading>UserHomepage</Heading>
      </div>
    </section>
  );
};

export default UserHomepage;
