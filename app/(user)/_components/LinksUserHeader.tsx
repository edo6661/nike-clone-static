import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeaderHelpDropdown from "./HeaderHelpDropdown";
import ToggleTheme from "@/components/ToggleTheme";
import { SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import UserButton from "@/components/UserButton";
import { db } from "@/lib/db";

const LinksUserHeader = async () => {
  return (
    <div className="container-header-links">
      <div>
        <Link href="/retail">Find a Store</Link>
        <SeparatorUserHeader />
      </div>
      <HeaderHelpDropdown />
      <div>
        <Link href="/membership">Join Us</Link>
        <SeparatorUserHeader />
      </div>

      <SignedOut>
        <div>
          <Link href="/sign-in">Login</Link>
          <SeparatorUserHeader />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export const SeparatorUserHeader = () => {
  return (
    <Separator
      orientation="vertical"
      className="dark-primary-bg h-6  w-[2px]"
    />
  );
};

export default LinksUserHeader;
