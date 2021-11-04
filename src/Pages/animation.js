export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: 500 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const slideBloc = {
  hidden: {
    x: 1500,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const slideIcon = {
  hidden: {
    y: 800,
  },
  show: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const slideText = {
  hidden: {
    x: 800,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
