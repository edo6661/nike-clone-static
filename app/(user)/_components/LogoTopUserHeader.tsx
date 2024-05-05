"use client";
import DropdownActions from "@/components/custom/DropdownActions";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/lib/zustand/useSearch";
import { Content, Logo } from "@prisma/client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";

interface LogoTopUserHeaderProps extends Logo {
  content: Content;
}

const LogoTopUserHeader = ({ content }: LogoTopUserHeaderProps) => {
  const { isSearch } = useSearch();
  const isClient = useIsClient();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const imageSrc = isLight ? "/logo-cut.png" : "/dark-logo.png";
  const imageReuse = (
    <>
      {content.images.map((image) => (
        <Link
          href="/"
          className="hover-secondary-bg base-transition hover:rounded-xl"
          key={content.id}
        >
          <Image
            src={image}
            alt="Top Logo"
            width={102}
            height={60}
            className=" h-14"
          />
        </Link>
      ))}
      {/* <DropdownActions /> */}
    </>
  );
  return isClient ? (
    isLight ? (
      imageReuse
    ) : (
      imageReuse
    )
  ) : (
    <Skeleton className=" skeleton m-2 h-12 w-28" />
  );
};

export default LogoTopUserHeader;
