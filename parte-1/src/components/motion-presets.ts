export const revealViewport = {
  once: true,
  amount: 0.2,
};

export const revealTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
