import { ChevronRight } from "lucide-react";
import React from "react";
interface MobileButtonHeaderLinksProps {
  actions: (item: string) => void;
  label: string;
}
const MobileButtonHeaderLinks = ({
  actions,
  label,
}: MobileButtonHeaderLinksProps) => {
  return (
    <button
      className="fl-ic w-full justify-between text-xl font-semibold"
      onClick={() => {
        actions(label);
      }}
    >
      <span>{label}</span>
      <span>
        <ChevronRight />
      </span>
    </button>
  );
};

export default MobileButtonHeaderLinks;
