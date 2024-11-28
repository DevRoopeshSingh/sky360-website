import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export function useRevealAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return controls;
}
