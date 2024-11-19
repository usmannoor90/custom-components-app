"use client";
import React from "react";

import "./page.css";

const { useState, useEffect, useRef, useCallback } = React;

const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "up" | "down";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { height } = innerRef.current.getBoundingClientRect();
    const { height: parentHeight } = outerRef.current.getBoundingClientRect();

    const heightDeficit = parentHeight - height;

    const instanceHeight = height / innerRef.current.children.length;

    if (heightDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="h-[600px] overflow-hidden" ref={outerRef}>
      <div
        className="flex flex-col justify-center h-[fit-content] looper__innerList"
        ref={innerRef}
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "up" ? "normal" : "reverse",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

function OurTeckStack() {
  const dataArray = [
    { cardImg: "teckRow1img3", cardTitle: ".NET MVC" },
    { cardImg: "teckRow1img1", cardTitle: "JAVA" },
    { cardImg: "teckRow1img2", cardTitle: "SQL" },
  ];
  const dataArray2 = [
    { cardImg: "ReactIcon", cardTitle: "React.js" },
    { cardImg: "solidity", cardTitle: "Solidity" },
    { cardImg: "swift", cardTitle: "Swift" },
    { cardImg: "angular", cardTitle: "Angular Js" },
  ];

  return (
    <div className="  px-4   ">
      <div className="   my-auto ">
        <div className=" flex flex-col  lg:items-start items-center    gap-2  lg:max-w-[782px] lg:pb-0 pb-[3rem]  ">
          <h2 className=" md:text-[24px] text-[20px] font-normal md:leading-[38px] leading-[28px] text-left   bg-clip-text text-transparent bg-gradient-to-r from-[#AD13FB] to-[#194BFD]    ">
            Our Tech Stack
          </h2>
          <h1 className="  text-white md:text-[48px] text-[30px] font-semibold md:leading-[58.51px] lg:text-left text-center ">
            The Technologies We Are Using
          </h1>
          <h3 className=" md:text-[20px] text-[16px] font-normal md:leading-[38px] leading-[24px] lg:text-left text-center text-[#BED4E7] capitalize ">
            Sapien vitae id malesuada leo odio cras donec commodo. Tellus quam
            in molestie risus. Dictum viverra aliquet feugiat tortor sit.
            Sagittis tellus eleifend eget ridiculus phasellus donec integer
            imperdiet.
          </h3>
        </div>
      </div>
      <div className="  ">
        <div className=" flex items-center lg:justify-start justify-center sm:gap-8 gap-4    ">
          <InfiniteLooper speed={12} direction="up">
            {dataArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-[1px] bg-[linear-gradient(185deg,#FFFFFF00_35%,#FFFFFF4D_100%)]   rounded-[19px]  overflow-hidden   "
                >
                  <div className=" bg-[#000000b9] pl-[15px] pr-[50px] pt-[50px] pb-[30px] rounded-[19px]  overflow-hidden flex flex-col items-start  gap-[10px] mt-[1rem]    ">
                    {/* <img
                      src={item.cardImg}
                      alt=""
                      className="   "
                      width={"60px"}
                      height={"60px"}
                    /> */}
                    <h2 className=" text-white sm:text-[24px] text-[18px] font-semibold sm:leading-[38px] leading-[24px] text-left ">
                      {item.cardTitle}
                    </h2>
                  </div>
                </div>
              );
            })}
          </InfiniteLooper>

          <InfiniteLooper direction="down" speed={10}>
            {dataArray2.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-[1px] bg-[linear-gradient(185deg,#FFFFFF00_35%,#FFFFFF4D_100%)]   rounded-[19px]  overflow-hidden   "
                >
                  <div className=" bg-[#000000b9] pl-[15px] pr-[50px] pt-[50px] pb-[30px]  rounded-[19px]  overflow-hidden flex flex-col items-start  gap-[10px] mt-[1rem]    ">
                    {/* <img
                      src={item.cardImg}
                      alt=""
                      className="   "
                      width={"50px"}
                      height={"50px"}
                    /> */}
                    <h2 className=" text-white sm:text-[24px] text-[18px] font-semibold sm:leading-[38px] leading-[24px] text-left ">
                      {item.cardTitle}
                    </h2>
                  </div>
                </div>
              );
            })}
          </InfiniteLooper>
        </div>
      </div>
    </div>
  );
}

export default OurTeckStack;
