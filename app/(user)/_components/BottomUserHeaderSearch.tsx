import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const BottomUserHeaderSearch = () => {
  return (
    <form className="relative">
      <Input type="text" placeholder="Search..." className="input-hover" />
      <Button
        size="icon"
        variant="hoverIcon"
        type="submit"
        className=" 
        absolute right-0 top-1/2 -translate-y-1/2   "
      >
        <Search size={20} />
      </Button>
    </form>
  );
};

export default BottomUserHeaderSearch;
