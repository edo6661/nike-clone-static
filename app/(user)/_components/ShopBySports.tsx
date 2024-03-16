import { Heading } from "@/components/custom/heading";
import { productShopBySportItems } from "@/constants/userHomepage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopBySports = () => {
  return (
    <div className="container-iconic-products">
      <Heading>Shop By Sports</Heading>
      <div>
        {productShopBySportItems.map((product) => (
          <Link
            href={`/product/${product.title}`}
            key={product.title}
            className=""
          >
            <div>
              <Image
                src={product.imgSrc}
                alt={product.title}
                width={384}
                height={300}
              />
            </div>
            <div className="space-y-1 pl-2">
              <Heading as="h5" size="sm">
                {product.title}
              </Heading>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopBySports;
