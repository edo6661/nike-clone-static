"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useIsClient } from "usehooks-ts";
const LogoTopUserHeader = () => {
  const isClient = useIsClient();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const imageSrc = isLight ? "/logo-cut.png" : "/dark-logo.png";
  const imageReuse = (
    <Image
      src={imageSrc}
      alt="Logo Nike"
      width={120}
      height={120}
      className=" h-14"
    />
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
