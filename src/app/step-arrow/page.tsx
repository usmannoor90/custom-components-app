"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StepsArrow = ({ className }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
      strokeDashoffset: 100,
      pathSpacing: 0,
    },
    animate: {
      pathLength: 0.01,
      pathSpacing: 0.01,
      opacity: 1,
      strokeDashoffset: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.svg
        className={className}
        width="358"
        height="314"
        viewBox="0 0 358 314"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.path
          d="M357 1C261.933 37.1726 91.3945 135.485 147.695 250.665C186.131 329.304 270.827 269.197 225.436 184.79C180.046 100.382 17.7501 125.166 33.4405 312 M33.4405 312L61.894 286.919M33.4405 312L0.999999 273.245"
          stroke="#8A8A8A"
          color="#8A8A8A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0 1"
          strokeDashoffset="500"
          variants={pathVariants}
        />
      </motion.svg>
    </>
  );
};

function Page() {
  return (
    <div>
      <StepsArrow className={"  "} />
    </div>
  );
}

export default Page;
