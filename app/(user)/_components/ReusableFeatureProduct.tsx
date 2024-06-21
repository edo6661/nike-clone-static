import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedProductType {
  heading: string;
  description: string;
  button: string;
  imageSrc: string;
}

const ReusableFeatureProduct = async ({
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
            priority
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

export const SkeletonReusableFeatureProduct = () => {
  return (
    <div className="container ">
      <Skeleton className="h-[406px] w-full space-y-12 rounded-3xl sm:h-[541px] md:h-[570px] lg:h-[611px] "></Skeleton>
    </div>
  );
};

export default ReusableFeatureProduct;
