"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useStrategyCall } from "@/components/strategy/StrategyCallProvider";
import { StrategyCallWizard } from "@/components/strategy/StrategyCallWizard";
import { EASE } from "@/lib/motion";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

export function StrategyCallOverlay() {
  const { strategyOpen, closeStrategy } = useStrategyCall();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!strategyOpen) return;
    lockScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeStrategy();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKey);
    };
  }, [strategyOpen, closeStrategy]);

  return (
    <AnimatePresence>
      {strategyOpen ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="strategy-call-title"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink [color-scheme:dark]"
        >
          <StrategyCallWizard onClose={closeStrategy} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
