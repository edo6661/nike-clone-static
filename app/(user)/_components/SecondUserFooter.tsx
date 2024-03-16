"use client";
import { Heading } from "@/components/custom/heading";
import { leftFooterItems, midFooterItems } from "@/constants/userHomepage";
import { motion } from "framer-motion";
import Link from "next/link";
import { icons } from "./FooterIcons";
import MidUserFooter from "./MidUserFooter";

const SecondUserFooter = () => {
  return (
    <motion.div layout className="container-second-footer">
      <div>
        <MidUserFooter />
        <div>
          <div className="fl-ic gap-2">
            <a href="" className="hover-link-primary font-semibold">
              My Github
            </a>
            <a
              href="https://www.nike.com/"
              className="base-description hover-link-primary"
            >
              © 2023 Nike, Inc. All Rights Reserved
            </a>
          </div>
          <div className="container-footer-links">
            <Link href="/guides">Guides</Link>
            <Link href="/terms-of-sale">Terms of sale</Link>
            <Link href="/terms-of-use">Terms of use</Link>
            <Link href="/privacy-policy">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondUserFooter;
