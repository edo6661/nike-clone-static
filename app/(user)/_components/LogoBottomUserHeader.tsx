"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { basicMotionProps, existVars } from "@/lib/framer-motion";
import { useSearch } from "@/lib/zustand/useSearch";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
const LogoBottomUserHeader = () => {
  const { isSearch } = useSearch();
  const isClient = useIsClient();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const imageSrc = isLight
    ? "/copy-dark-logo-nike.png"
    : "/white-logo-nike.png";
  const imageReuse = (
    <>
      <AnimatePresence>
        {!isSearch && (
          <motion.div variants={existVars} {...basicMotionProps} layout>
            <Link
              href="/"
              className=" hover-primary-bg base-transition hover:rounded-xl"
            >
              <Image
                src={imageSrc}
                alt="Logo Nike"
                width={90}
                height={40}
                className="max-h-[40px]"
              />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  return isClient ? (
    isLight ? (
      imageReuse
    ) : (
      imageReuse
    )
  ) : (
    <Skeleton className=" skeleton m-2 h-16 w-36" />
  );
};

export default LogoBottomUserHeader;
