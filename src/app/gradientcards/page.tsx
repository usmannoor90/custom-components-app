import { Industries } from "@/constants/HomeConstants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

function page() {
  return (
    <div>
      <div className="  mx-auto xl:max-w-[1380px] max-w-[740px] grid xl:grid-cols-4 sm:grid-cols-2 gap-2  md:pt-[6rem] pt-[4rem] md:pb-[12rem] pb-[6rem]   ">
        {Industries.map((indutry, index) => {
          return (
            <AnimatedIndustryCard
              key={index}
              className={`${
                index % 2 && "xl:mt-[120px]"
              } xl:rotate-1 xl:mx-0 mx-auto `}
            >
              <div className=" flex flex-col gap-2 w-full   items-center justify-center p-4 ">
                <Image src={indutry.img} alt="" width={152} height={150} />
                <h2 className=" text-white text-[24px] font-medium leading-[36px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] uppercase   ">
                  {indutry.head}
                </h2>
                <p
                  className={`text-white text-[14px] font-normal leading-[21px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] mx-auto `}
                  style={{ maxWidth: "254px" }}
                >
                  {indutry.desc}
                </p>
              </div>
            </AnimatedIndustryCard>
          );
        })}
      </div>
    </div>
  );
}

export default page;

const AnimatedIndustryCard = ({ children, className }: any) => {
  return (
    <div
      className={cn(
        `relative max-w-[340px] w-full rounded-[20px] p-1 overflow-hidden group h-fit  `,
        className
      )}
    >
      {/* Gradient background that animates on hover */}
      <div
        className="absolute inset-0 bg-black overflow-hidden rounded-[20px] transition-all duration-500 ease-in-out
        group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-orange-500 group-hover:to-yellow-500 
        group-hover:animate-gradient-xy w-full h-full "
      />

      {/* Content container */}
      <div className="relative bg-black rounded-[20px]   ">
        <div className="bg-gradient-to-br from-[#CECECE29] to-[#CCC5CB0A] backdrop-blur-[40px] rounded-[20px] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
