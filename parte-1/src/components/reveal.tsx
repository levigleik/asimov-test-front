"use client";

import { motion } from "framer-motion";
import {
  revealTransition,
  revealVariants,
  revealViewport,
} from "@/components/motion-presets";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={revealVariants}
      transition={{ ...revealTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
