import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const MobileBottomUserHeaderSearch = () => {
  return (
    <Button size="icon" variant="hoverIcon" type="submit">
      <Search size={20} />
    </Button>
  );
};

export default MobileBottomUserHeaderSearch;
