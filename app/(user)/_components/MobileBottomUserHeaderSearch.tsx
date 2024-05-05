import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { basicMotionProps, existVars } from "@/lib/framer-motion";
import { useSearch } from "@/lib/zustand/useSearch";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import React from "react";

const MobileBottomUserHeaderSearch = () => {
  const { setIsSearch, isSearch } = useSearch((state) => state);

  return (
    <>
      <AnimatePresence>
        {!isSearch && (
          <motion.div
            layout
            variants={existVars}
            {...basicMotionProps}
            className="relative"
            transition={{
              delay: 0.3,
            }}
          >
            <Button
              size="icon"
              variant="hoverIcon"
              type="submit"
              onClick={() => setIsSearch(!isSearch)}
            >
              <Search size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSearch && (
          <motion.div layout className="absolute inset-0 top-4 w-full">
            <Input placeholder="Search..." className=" py-4" />
            <Button
              size="icon"
              variant="hoverIcon"
              type="submit"
              className="absolute right-12   top-0"
            >
              <Search size={20} />
            </Button>
            <Button
              size="icon"
              variant="hoverIcon"
              type="submit"
              onClick={() => setIsSearch(!isSearch)}
              className="absolute right-0 top-0"
            >
              <X size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomUserHeaderSearch;
