import BottomUserHeaderActions from "./BottomUserHeaderActions";
import BottomUserHeaderHovered from "./BottomUserHeaderHovered";
import LogoBottomUserHeader from "./LogoBottomUserHeader";
import MidBottomUserHeader from "./MidBottomUserHeader";
const BottomUserHeader = () => {
  return (
    <>
      <div className="  z-10 w-full bg-secondaryLightBg dark:bg-primaryDarkBg">
        <div className="fl-ic container z-10 max-h-[72px] justify-between gap-4 py-4 md:py-0">
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
