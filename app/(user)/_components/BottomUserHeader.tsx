import Image from "next/image";
import LogoBottomUserHeader from "./LogoBottomUserHeader";
import MidBottomUserHeader from "./MidBottomUserHeader";

const BottomUserHeader = () => {
  return (
    <div className=" bg-secondaryLightBg  dark:bg-primaryDarkBg">
      <div className="container justify-between gap-4 py-2">
        <LogoBottomUserHeader />
        <MidBottomUserHeader />
      </div>
    </div>
  );
};

export default BottomUserHeader;
