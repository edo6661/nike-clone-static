import type { Metadata } from "next";
import { AuthLogo } from "./_components/AuthLogo";

export const metadata: Metadata = {
  title: "Auth MugiChan",
  description: "Auth Page Mugichawn",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 flex h-screen flex-col items-center justify-center gap-4">
      <AuthLogo />
      {children}
    </div>
  );
}
