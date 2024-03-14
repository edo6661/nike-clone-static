import React from "react";
import BannerUser from "./_components/BannerUser";
import FeaturedProduct from "./_components/FeaturedProduct";

const UserHomepage = () => {
  return (
    <section>
      <BannerUser />
      <div className="container ">
        {/* TODO replace by dynamic data */}
        <FeaturedProduct />
      </div>
      <div className="min-h-screen"></div>
    </section>
  );
};

export default UserHomepage;
