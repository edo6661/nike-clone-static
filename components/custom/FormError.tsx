"use client";
import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import useIsClient from "@/hooks/useIsClient";
import { basicMotionProps, existVars } from "@/lib/framer-motion";
interface FormErrorProps {
  error: string;
}
const FormError = ({ error }: FormErrorProps) => {
  const isClient = useIsClient();

  if (!error) return null;
  return (
    <AnimatePresence>
      {isClient && error && (
        <motion.div
          variants={existVars}
          {...basicMotionProps}
          className="container-form-error"
        >
          <ExclamationTriangleIcon className=" h-4 w-4" />
          <p>{error}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormError;
