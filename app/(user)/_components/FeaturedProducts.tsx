import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/constants/featuredProducts";
import Link from "next/link";

const FeaturedProducts = async () => {

  return (
    <div className="container-featured-products">
      <Heading>Featured</Heading>
      <div>
        {featuredProducts.map((image, i) => (
          <Link
            style={{
              backgroundImage: `url(${image})`,
            }}
            key={image}
            href={`#`}
            className=""
          >
            <div>
              <Heading as="h5" size="sm" className="font-medium text-white">
                {`Featured Product ${i + 1}`}
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
