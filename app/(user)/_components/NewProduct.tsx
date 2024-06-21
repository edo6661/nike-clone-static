import React from "react";
import ReusableFeatureProduct from "./ReusableFeatureProduct";

const NewProduct = async () => {

  return (
    <ReusableFeatureProduct
      heading={"AJI HIGH OG BLACK & WHITE"}
      description="Suit up and show up in this iconic colorway. Inspired by MJ's all bussiness attitude, you're ready to make moves"
      button="Shop"
      imageSrc={"/trending-below-hero.jpg"}
    />
  )
};

export default NewProduct;
