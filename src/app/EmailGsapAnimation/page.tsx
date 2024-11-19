"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

const EmailWarmup: React.FC = () => {
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const emailIconRef = useRef<HTMLImageElement | null>(null);
  const deliverabilityScoreRef = useRef<HTMLDivElement | null>(null);
  const spamPathRef = useRef<SVGPathElement | null>(null);
  const inboxPathRef = useRef<SVGPathElement | null>(null);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      // Animate arrow along the inbox path when toggle is ON
      gsap.to(emailIconRef.current, {
        motionPath: {
          path: inboxPathRef.current,
          align: inboxPathRef.current,
          autoRotate: true,
        },
        duration: 2,
      });
    } else {
      // Animate arrow along the spam path when toggle is OFF
      gsap.to(emailIconRef.current, {
        motionPath: {
          path: spamPathRef.current,
          align: spamPathRef.current,
          autoRotate: true,
        },
        duration: 2,
      });
    }
  }, [isOn]);

  const toggleEmailWarmup = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="email-warmup flex flex-col items-center justify-center h-screen font-sans">
      <div className="toggle-switch flex items-center justify-between w-full p-4">
        <div
          ref={toggleRef}
          className={`switch ${
            isOn ? "bg-green-400" : "bg-gray-400"
          } rounded-full px-6 py-2 text-white cursor-pointer`}
          onClick={toggleEmailWarmup}
        >
          {isOn ? "Email Warmup: ON" : "Email Warmup: OFF"}
        </div>
        <div
          ref={deliverabilityScoreRef}
          className="deliverability-score text-lg"
        >
          {isOn ? "100° Deliverability Score" : "11° Deliverability Score"}
        </div>
      </div>

      <div className="relative mt-12 w-96 h-64">
        {/* Paths for GSAP animation */}
        <svg className="absolute top-0 left-0 w-full h-full">
          {/* Spam Path */}
          <path
            ref={spamPathRef}
            d="M50,150 Q150,100 250,150"
            stroke={isOn ? "#ccc" : "#FF0000"}
            strokeWidth="2"
            fill="none"
          />
          {/* Inbox Path */}
          <path
            ref={inboxPathRef}
            d="M50,150 Q150,50 250,150"
            stroke={isOn ? "#00FF00" : "#ccc"}
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="absolute left-0 top-0 flex items-center justify-center w-full h-full">
          {/* Email icon that follows the path */}
          {/* <img
            src="/images/arrow.png"
            alt="Arrow"
            className="email-icon w-8 h-8"
            ref={emailIconRef}
          /> */}
        </div>

        <div className="spam absolute left-0 bottom-0">
          <div className="label mt-2 text-center">Spam</div>
        </div>

        <div className="inbox absolute right-0 bottom-0">
          <div className="label mt-2 text-center">Inbox</div>
        </div>
      </div>
    </div>
  );
};

export default EmailWarmup;
