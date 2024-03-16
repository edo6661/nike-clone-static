import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
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
