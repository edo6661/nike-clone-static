import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedProductType {
  heading: string;
  description: string;
  button: string;
  imageSrc: string;
}

const ReusableFeatureProduct = ({
  heading,
  description,
  button,
  imageSrc,
}: FeaturedProductType) => {
  // TODO replace by dynamic data
  return (
    <div className="container ">
      <div className="group ">
        <Link
          href={`/product/1`}
          className="container-featured-product    group-hover:rounded-3xl   "
        >
          <Image
            src={imageSrc}
            alt="Featured Product"
            width={1172}
            height={962}
            className=" base-transition group-hover:rounded-3xl group-hover:opacity-90"
          />

          <div>
            <Heading size="lg" as="h2">
              {heading}
            </Heading>
            <p>{description}</p>
            <Button
              size="lg"
              variant="outline"
              className="text-black dark:text-white"
            >
              {button}
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ReusableFeatureProduct;
