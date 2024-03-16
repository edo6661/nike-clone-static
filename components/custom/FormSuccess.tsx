"use client";
import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import useIsClient from "@/hooks/useIsClient";
import { basicMotionProps, existVars } from "@/lib/framer-motion";
interface FormSuccessProps {
  success: string;
}
const FormSuccess = ({ success }: FormSuccessProps) => {
  const isClient = useIsClient();
  if (!success) return null;
  return (
    <AnimatePresence>
      {isClient && success && (
        <motion.div
          variants={existVars}
          {...basicMotionProps}
          className="container-form-success"
        >
          <CheckCircledIcon className=" h-4 w-4" />
          <p>{success}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormSuccess;
