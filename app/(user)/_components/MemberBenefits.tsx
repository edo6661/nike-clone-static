import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import {
  productMemberBenefitsItems,
} from "@/constants/userHomepage";
import Image from "next/image";
import Link from "next/link";

const MemberBenefits = () => {
  return (
    <div className="container-iconic-products">
      <Heading>Member Benefits</Heading>
      <div>
        {productMemberBenefitsItems.map((product) => {
          return (
            <Link
              href={`/product/${product.title}`}
              key={product.title}
              className="reset-p relative "
            >
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={560}
                  height={560}
                />
              </div>
              <div className="absolute bottom-32 left-12 space-y-4  text-white">
                <div>
                  <Heading as="h6" size="sm" className="text-lg">
                    {product.title}
                  </Heading>
                  <Heading as="h5" size="sm" className="font-semibold">
                    {product.desc}
                  </Heading>
                </div>
                <Button size="sm" variant="secondary" className="font-semibold">
                  {product.subDesc}
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MemberBenefits;
