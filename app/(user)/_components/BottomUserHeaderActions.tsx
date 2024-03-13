import React from "react";
import BottomUserHeaderSearch from "./BottomUserHeaderSearch";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

const BottomUserHeaderActions = () => {
  return (
    <div className="fl-ic justify-between gap-4">
      <BottomUserHeaderSearch />
      <Button size="icon" variant="hoverIcon" type="submit">
        <Link href="/wishlist">
          <Heart size={20} />
        </Link>
      </Button>
      <Button size="icon" variant="hoverIcon" type="submit">
        <Link href="/cart">
          <ShoppingBag size={20} />
        </Link>
      </Button>
    </div>
  );
};

export default BottomUserHeaderActions;
