import React, { Suspense } from "react";
import BannerUser from "./_components/BannerUser";
import ReusableFeatureProduct, {
  SkeletonReusableFeatureProduct,
} from "./_components/ReusableFeatureProduct";
import ProductsIconic from "./_components/ProductsIconic";
import FeaturedProducts from "./_components/FeaturedProducts";
import AlwaysIconicProducts from "./_components/AlwaysIconicProducts";
import ShopBySports from "./_components/ShopBySports";
import MemberBenefits from "./_components/MemberBenefits";
import VerticalSeparator from "@/components/VerticalSeparator";
import { Heading } from "@/components/custom/heading";
import NewProduct from "./_components/NewProduct";

const UserHomepage = async () => {



  return (
    <section className=" space-y-12 pb-4 pt-16 md:pt-4 ">
      {/* <Link href="/peg">
        Peg
      </Link> */}
      <BannerUser />
      {/* <BannerUser {...banner!} /> */}
      {/* TODO replace by dynamic data */}
      <Suspense fallback={<SkeletonReusableFeatureProduct />}>
        <NewProduct />
      </Suspense>

      <Suspense fallback={<Heading>Loading...</Heading>}>
        <FeaturedProducts />
      </Suspense>

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
