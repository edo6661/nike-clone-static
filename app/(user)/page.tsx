import React from "react";
import BannerUser from "./_components/BannerUser";
import TrendingProduct from "./_components/TrendingProduct";
import ReusableFeatureProduct from "./_components/ReusableFeatureProduct";
import ProductsIconic from "./_components/ProductsIconic";
import FeaturedProducts from "./_components/FeaturedProducts";
import AlwaysIconicProducts from "./_components/AlwaysIconicProducts";
import ShopBySports from "./_components/ShopBySports";
import MemberBenefits from "./_components/MemberBenefits";
import VerticalSeparator from "@/components/VerticalSeparator";
import { getUserById } from "@/services/user";

const UserHomepage = async () => {
  return (
    <section className=" space-y-12 py-4">
      <BannerUser />
      {/* TODO replace by dynamic data */}
      <ReusableFeatureProduct
        heading="AJ1 HIGH OG BLACK & WHITE"
        description="Suit up and show up in this iconic colorway. Inspired by MJ's all bussiness attitude, you're ready to make moves"
        button="Shop"
        imageSrc="/trending-below-hero.jpg"
      />
      {/* <ReusableFeatureProduct
        heading="NIKE AIR MAX DN"
        description="The next generation of Air technology launches on March 26th,
        Preview the full lineup of colourways now"
        button="Get Notified"
        imageSrc="/hero-image.png"
      /> */}
      {/* TODO replace by dynamic data */}
      <FeaturedProducts />

      {/* TODO replace by dynamic data */}
      <ReusableFeatureProduct
        heading="LBJ X LFC"
        description="From L.A to Liverpool, two icons collide"
        button="Shop"
        imageSrc="/gear-up-below-hero.jpg"
      />
      {/* TODO replace by dynamic data */}
      <AlwaysIconicProducts />
      <VerticalSeparator />
      <ProductsIconic />

      {/* TODO replace by dynamic data */}
      <ShopBySports />
      {/* TODO replace by dynamic data */}
      <MemberBenefits />
    </section>
  );
};

export default UserHomepage;
