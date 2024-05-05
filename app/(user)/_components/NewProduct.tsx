import { getNew } from "@/services/new";
import React from "react";
import ReusableFeatureProduct from "./ReusableFeatureProduct";

const NewProduct = async () => {
  const newProduct = await getNew();

  return newProduct?.content.images.map((image) => (
    <ReusableFeatureProduct
      key={image}
      heading={newProduct.content.title}
      description="Suit up and show up in this iconic colorway. Inspired by MJ's all bussiness attitude, you're ready to make moves"
      button="Shop"
      imageSrc={image}
    />
  ));
};

export default NewProduct;
