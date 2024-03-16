import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { productFeaturedItems } from "@/constants/userHomepage";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <div className="container-featured-products">
      <Heading>Featured</Heading>
      <div>
        {productFeaturedItems.map((product) => (
          <Link
            style={{
              backgroundImage: `url(${product.imgSrc})`,
            }}
            key={product.title}
            href={`/product/${product.title}`}
          >
            <div>
              <Heading as="h5" size="sm" className="font-medium text-white">
                {product.title}
              </Heading>
              <Button variant="secondary" size="lg">
                Shop
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
