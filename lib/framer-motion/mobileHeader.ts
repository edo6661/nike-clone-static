import { basicTransitionVars } from ".";

export const mobileHeaderVars = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
  transition: {
    ease: "easeInOut",
  },
};
export const doubleMobileHeaderVars = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
  transition: {
    ease: "easeInOut",
  },
};
export const reverseMobileHeaderVars = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
  transition: {
    ease: "easeInOut",
  },
};
