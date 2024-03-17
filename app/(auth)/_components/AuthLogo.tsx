import ImageLogo from "@/components/ImageLogo";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

export const AuthLogo = () => {
  return (
    <div className={cn("fl-col-center gap-4 font-montserrat ")}>
      <ImageLogo />
      <div className="fl-col-center ">
        <h1 className="title">
          Mugishop <span className="text-muted-foreground">&#8506;</span>
        </h1>
        <p className="muted-text">Shoppy!</p>
      </div>
    </div>
  );
};
