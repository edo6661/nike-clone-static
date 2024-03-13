import Link from "next/link";
import { SeparatorUserHeader } from "./LinksUserHeader";
import { HoverDropdown } from "@/components/custom/hover-dropdown";
import { Heading } from "@/components/custom/heading";

const HeaderHelpDropdown = () => {
  return (
    <div>
      <HoverDropdown trigger={<Link href="/">Help</Link>}>
        <div className=" space-y-8">
          <Heading size="sm" className="font-semibold">
            Help
          </Heading>
          <div className="container-help-links">
            <Link href="/help">Help Center</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/order-tracking">Order Tracking</Link>
            <Link href="/delivery">Delivery</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/store-locator">Store Locator</Link>
          </div>
        </div>
      </HoverDropdown>
      <SeparatorUserHeader />
    </div>
  );
};

export default HeaderHelpDropdown;
