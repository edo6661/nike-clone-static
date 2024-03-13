import { motion } from "framer-motion";
const HeaderClient = ({ children }: ChildrenType) => {
  return <motion.header layout>{children}</motion.header>;
};

export default HeaderClient;
