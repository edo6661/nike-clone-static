import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";

import { ClerkProvider } from "@clerk/nextjs";

interface ProviderProps {
  children: React.ReactNode;
}
const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
