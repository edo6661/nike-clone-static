import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProduct = () => {
  // TODO replace by dynamic data
  return (
    <div className="group ">
      <Link
        href={`/product/1`}
        className="container-featured-product base-transition hover-primary-bg pb-4 group-hover:rounded-3xl   "
      >
        <Image
          src="/hero-image.png"
          alt="Featured Product"
          width={1172}
          height={962}
          className=" base-transition group-hover:rounded-b-3xl group-hover:opacity-90"
        />
        <div>
          <Heading size="lg" as="h2">
            NIKE AIR MAX DN
          </Heading>
          <p>
            The next generation of Air technology launches on March 26th,
            Preview the full lineup of colourways now
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-black dark:text-white"
          >
            Get Notified
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
