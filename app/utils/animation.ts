import { easeOut, Transition } from "framer-motion";

// utils/animations.ts
export const fadeInUp = (delay = 0, duration = 0.5) => {
  return {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: easeOut },
  };
};

export const fadeInDown = (delay = 0, duration = 0.5) => {
  return {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: easeOut },
  };
};

// utils/animations.ts

export const animateInView = (delay = 0, duration = 0.5) => {
  const transition: Transition = { delay, duration, ease: easeOut };

  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition },
    viewport: { once: true, amount: 0.3 },
  };
};
