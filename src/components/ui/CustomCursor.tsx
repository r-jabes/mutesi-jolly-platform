"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type CursorLabel = "VIEW" | "OPEN" | "DRAG" | null;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [label, setLabel] = useState<CursorLabel>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 520, damping: 42, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 520, damping: 42, mass: 0.25 });
  const ringX = useSpring(x, { stiffness: 240, damping: 30, mass: 0.38 });
  const ringY = useSpring(y, { stiffness: 240, damping: 30, mass: 0.38 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const shouldEnable = finePointer.matches && !reducedMotion.matches;
      setEnabled(shouldEnable);
      document.body.classList.toggle("has-custom-cursor", shouldEnable);
    };

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = e.target as HTMLElement | null;
      const labeled = el?.closest("[data-cursor]") as HTMLElement | null;
      const next = (labeled?.dataset.cursor as CursorLabel) ?? null;
      setLabel(next);

      const isInteractive = Boolean(
        el?.closest(
          "a, button, [role='button'], input, textarea, select, label, [data-cursor]",
        ),
      );
      setInteractive(isInteractive || Boolean(next));
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const expanded = interactive || Boolean(label);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] mix-blend-difference transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className={cn(
            "-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 transition-all duration-300 ease-editorial",
            label
              ? "flex h-[4.25rem] w-[4.25rem] items-center justify-center bg-white/10"
              : expanded
                ? "h-11 w-11"
                : "h-8 w-8",
            pressed && !label && "scale-[0.82]",
          )}
        >
          {label ? (
            <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-white">
              {label}
            </span>
          ) : null}
        </div>
      </motion.div>

      {!label ? (
        <motion.div
          className="absolute left-0 top-0"
          style={{ x: springX, y: springY }}
        >
          <div
            className={cn(
              "-translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200 ease-editorial",
              pressed ? "h-1 w-1" : "h-1.5 w-1.5",
              expanded && "scale-0 opacity-0",
            )}
          />
        </motion.div>
      ) : null}
    </div>
  );
}
