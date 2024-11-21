"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StepText = ({ text }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}>
      <motion.div>
        <div className="relative">
          <h1 className="text-[44px] font-bold leading-[55.44px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] text-[#48DEFF] relative z-10   ">
            {text}
          </h1>
          <motion.div
            className="absolute top-2 left-0 z-[0] text-[80px] font-bold leading-[100.8px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] text-[#ffffff7a] opacity-20 text-nowrap   "
            // initial={{ x: "-100%", y: "100%" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isInView ? 0.4 : 0.2,
              scale: isInView ? 1 : 0.5,
              top: isInView ? "4px" : "-10px",
              fontSize: isInView ? "80px" : "44px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.2, 0.8, 0.2, 1],
              scale: {
                type: "tween",
                damping: 10,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            {text}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

function page() {
  return (
    <div>
      <div className=" min-h-screen  flex items-center justify-center ">
        <StepText text="Step 1" />
      </div>
      <div className=" min-h-screen flex items-center justify-center  ">
        <StepText text="Step 2" />
      </div>
    </div>
  );
}

export default page;
