"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ImageReveal({
  children,
  className,
  delay = 0,
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
