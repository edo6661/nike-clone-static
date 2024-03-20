import BottomUserHeaderActions from "./BottomUserHeaderActions";
import BottomUserHeaderHovered from "./BottomUserHeaderHovered";
import LogoBottomUserHeader from "./LogoBottomUserHeader";
import MidBottomUserHeader from "./MidBottomUserHeader";

const BottomUserHeader = () => {
  return (
    <>
      <div className=" relative  bg-secondaryLightBg dark:bg-primaryDarkBg">
        <div className="fl-ic container relative justify-between gap-4 py-4 md:py-0">
          <LogoBottomUserHeader />
          <MidBottomUserHeader />
          <BottomUserHeaderActions />
        </div>
        <BottomUserHeaderHovered />
      </div>
    </>
  );
};

export default BottomUserHeader;
