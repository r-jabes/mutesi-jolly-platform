"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
};

export function TextReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: TextRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <span className={cn("clip-text inline-block align-top", className)}>
      <motion.span
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{
          duration: 0.95,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
