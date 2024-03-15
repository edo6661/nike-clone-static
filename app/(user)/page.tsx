import React from "react";
import BannerUser from "./_components/BannerUser";
import TrendingProduct from "./_components/TrendingProduct";
import ReusableFeatureProduct from "./_components/ReusableFeatureProduct";
import ProductsIconic from "./_components/ProductsIconic";

const UserHomepage = () => {
  return (
    <section className=" space-y-12">
      <BannerUser />
      {/* TODO replace by dynamic data */}
      {/* <FeaturedProduct /> */}
      <ReusableFeatureProduct
        heading="NIKE AIR MAX DN"
        description="The next generation of Air technology launches on March 26th,
        Preview the full lineup of colourways now"
        button="Get Notified"
        imageSrc="/hero-image.png"
      />
      {/* TODO replace by dynamic data */}
      <ProductsIconic />
      {/* TODO replace by dynamic data */}
      <ReusableFeatureProduct
        heading="AJ1 HIGH OG BLACK & WHITE"
        description="Suit up and show up in this iconic colorway. Inspired by MJ's all bussiness attitude, you're ready to make moves"
        button="Shop"
        imageSrc="/trending-below-hero.jpg"
      />
      <div className="min-h-screen"></div>
    </section>
  );
};

export default UserHomepage;
