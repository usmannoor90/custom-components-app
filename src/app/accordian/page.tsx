"use client";
import React, { useRef, useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
import arrow from "@/../public/pics/FaqsarrowIcon.svg";
import Image from "next/image";

interface DataInterface {
  number: string;
  title: string;
  message: string;
}

interface AccordionItemProps {
  data: DataInterface;
  isOpen: boolean;
  onClick: () => void;
}

const array = [
  {
    number: "01",
    title: "Lorem ipsum dolor sit amet consectetur ?",
    message:
      "This one  provides powerful blockchain solutions by empowering businesses to profit from the seemingly limitless capabilities",
  },
  {
    number: "02",
    title: "Lorem ipsum dolor sit amet consectetur ?",
    message:
      "This one  provides powerful blockchain solutions by empowering businesses to profit from the seemingly limitless capabilities",
  },
  {
    number: "03",
    title: "Lorem ipsum dolor sit amet consectetur ?",
    message:
      "This one  provides powerful blockchain solutions by empowering businesses to profit from the seemingly limitless capabilities",
  },
  {
    number: "04",
    title: "Lorem ipsum dolor sit amet consectetur ?",
    message:
      "This one  provides powerful blockchain solutions by empowering businesses to profit from the seemingly limitless capabilities",
  },
  {
    number: "05",
    title: "Lorem ipsum dolor sit amet consectetur ?",
    message:
      "This one  provides powerful blockchain solutions by empowering businesses to profit from the seemingly limitless capabilities",
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({
  data,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`  overflow-hidden border-solid border-[1px] !border-[#212121] rounded-[10px] ${
        isOpen ? " !border-[#2C44FC] bg-transparent backdrop-blur-sm   " : "  "
      }`}
    >
      <button
        className={`w-full text-left md:pl-[50px] sm:pl-[20px] pl-[10px] sm:pr-[20px] pr-[10px] sm:py-[26px] py-[12px] flex items-center justify-between font-medium text-[20px] bg-transparent border-[none] cursor-pointer ${
          isOpen ? "active" : "  "
        }`}
        onClick={onClick}
      >
        <div>
          <span className="  sm:text-[24px] text-[14px] font-medium sm:leading-[29.26px] leading-[20px] tracking-wider text-left text-[#2C44FC]  ">
            {data.number}{" "}
          </span>{" "}
          <span
            className={`sm:text-[24px] text-[14px] font-medium sm:leading-[29.26px] leading-[20px]tracking-wider text-left text-[#9DB1C0] ${
              isOpen ? "text-white" : ""
            } `}
          >
            {" "}
            {data.title}
          </span>
        </div>
        <Image
          src={arrow}
          alt=""
          width={20}
          className={`[transition:0.2s_ease-in-out] ${
            isOpen ? "rotate-180" : ""
          }`}
        />

        {/* <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} /> */}
      </button>

      <div
        ref={contentHeight}
        className="px-4 py-[0] [transition:height_0.7s_ease-in-out]"
        style={
          isOpen
            ? { height: `${contentHeight.current?.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        <p className="md:pl-16 sm:pl-4 pl-2 sm:pb-8 pb-3 sm:pt-4 pt-0 md:pr-4    sm:text-[20px] text-[14px] font-light sm:leading-[24.38px] leading-[18px] tracking-wider text-left  text-[#C2C2C2]  ">
          {data.message}
        </p>
      </div>
    </div>
  );
};

const AccordianCustom: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="  text-white grid grid-cols-1 max-w-[1278px] mx-auto gap-3 ">
      {array.map((item, index) => (
        <AccordionItem
          key={index}
          data={item}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordianCustom;
