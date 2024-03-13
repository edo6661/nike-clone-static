export const headerParentTransition = {
  transition: {
    duration: 0.5,
    ease: "easeInOut",
    when: "beforeChildren",
    staggerChildren: -1,
  },
};

export const headerItemsVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: headerParentTransition,
  },
  exit: { opacity: 0 },
};
export const useHeaderVars = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};
