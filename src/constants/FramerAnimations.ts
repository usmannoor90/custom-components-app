const sidebarVariants = {
  closed: {
    x: "100%",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
  open: {
    x: "0%",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

const backdropVariants = {
  closed: { opacity: 0, transition: { duration: 0.2 } },
  open: { opacity: 1, transition: { duration: 0.2 } },
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

// Variants for underline animation
const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export {
  buttonVariants,
  menuItemVariants,
  backdropVariants,
  sidebarVariants,
  underlineVariants,
};
