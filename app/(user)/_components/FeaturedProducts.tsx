import { Heading } from "@/components/custom/heading";
import { Button } from "@/components/ui/button";
import { getFeatured } from "@/services/featured";
import Link from "next/link";

const FeaturedProducts = async () => {
  const featuredProducts = await getFeatured();

  return (
    <div className="container-featured-products">
      <Heading>Featured</Heading>
      <div>
        {featuredProducts?.content.images.map((image) => (
          <Link
            style={{
              backgroundImage: `url(${image})`,
            }}
            key={image}
            href={`/product/${featuredProducts.content.link}`}
            className=""
          >
            <div>
              <Heading as="h5" size="sm" className="font-medium text-white">
                {featuredProducts.content.title}
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
