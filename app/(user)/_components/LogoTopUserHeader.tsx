"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/lib/zustand/useSearch";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";


const LogoTopUserHeader = (
) => {
  const { isSearch } = useSearch();
  const isClient = useIsClient();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const imageSrc = isLight ? "/logo-cut.png" : "/dark-logo.png";
  const imageReuse = (
    <>
      <Link
        href="/"
        className="hover-secondary-bg base-transition hover:rounded-xl"
      >
        <Image
          src={imageSrc}
          alt="Top Logo"
          width={102}
          height={60}
          className=" h-14"
        />
      </Link>

      {/* {content.images.map((image) => (
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
      ))} */}
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
