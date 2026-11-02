"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const pathRef = useRef(pathname);
  const frozen = useRef(children);
  const latest = useRef({ pathname, children });
  const [visiblePath, setVisiblePath] = useState(pathname);
  const [leaving, setLeaving] = useState(false);

  latest.current = { pathname, children };

  if (!leaving && pathname === pathRef.current) {
    frozen.current = children;
  }

  useEffect(() => {
    if (pathname === visiblePath) return;
    if (reduce) {
      pathRef.current = pathname;
      frozen.current = children;
      setVisiblePath(pathname);
      window.scrollTo(0, 0);
      return;
    }
    setLeaving(true);
  }, [pathname, visiblePath, reduce, children]);

  return (
    <motion.div
      className="flex flex-1 flex-col"
      initial={false}
      animate={leaving ? { opacity: 0, y: -18 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      onAnimationComplete={() => {
        if (!leaving) return;
        const next = latest.current;
        pathRef.current = next.pathname;
        frozen.current = next.children;
        setVisiblePath(next.pathname);
        setLeaving(false);
        window.scrollTo(0, 0);
      }}
    >
      {frozen.current}
    </motion.div>
  );
}
