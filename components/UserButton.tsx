"use client";
import useIsClient from "@/hooks/useIsClient";
import { UserButton as UserBtn } from "@clerk/nextjs";
const UserButton = () => {
  const isClient = useIsClient();

  return isClient ? <UserBtn afterSignOutUrl="/" /> : null;
};

export const SkeletonUserButton = () => {};

export default UserButton;
