import { Heading } from "@/components/custom/heading";
import { productIconicItems } from "@/constants/userHomepage";
import Image from "next/image";
import Link from "next/link";

const ProductsIconic = () => {
  return (
    <div className="container-featured-products">
      <Heading>Icons of Air</Heading>
      <div className="featured-products-scroll">
        {productIconicItems.map((product) => {
          return (
            <Link href={`/product/${product.title}`} key={product.title}>
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={560}
                  height={560}
                  className="min-w-[360px]"
                />
              </div>
              <div>
                <Heading as="h5" size="sm" className=" pl-2">
                  {product.title}
                </Heading>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsIconic;
