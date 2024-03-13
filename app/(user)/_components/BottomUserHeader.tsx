import BottomUserHeaderActions from "./BottomUserHeaderActions";
import BottomUserHeaderHovered from "./BottomUserHeaderHovered";
import LogoBottomUserHeader from "./LogoBottomUserHeader";
import MidBottomUserHeader from "./MidBottomUserHeader";

const BottomUserHeader = () => {
  return (
    <>
      <div className=" relative  bg-secondaryLightBg dark:bg-primaryDarkBg">
        <div className="fl-ic container justify-between gap-4">
          <LogoBottomUserHeader />
          <MidBottomUserHeader />
          <BottomUserHeaderActions />
        </div>
        <div>
          <BottomUserHeaderHovered />
        </div>
      </div>
    </>
  );
};

export default BottomUserHeader;
