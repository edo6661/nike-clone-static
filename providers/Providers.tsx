import React from "react";
import { ThemeProvider } from "./ThemeProvider";
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
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
