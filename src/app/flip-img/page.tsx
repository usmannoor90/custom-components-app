"use client";
import { OurPartnersList } from "@/constants/HomeConstants";
import Image from "next/image";

import React from "react";

function AdvancedPartnerCard({ img, name, position, desc }: any) {
  return (
    <div className="w-fit mx-auto relative group overflow-hidden rounded-[20px] items-center justify-center p-[2px] hover:bg-[linear-gradient(0deg,#111012_0%,#7748FF_50%,#FFB800_100%)] [box-shadow:61px_61px_24px_-1px_#0000000D] transition-all duration-500  [perspective:1000px] ">
      <div>
        <Image
          src={img}
          alt=""
          width={320}
          height={500}
          className={
            "w-[320px] h-[500px] transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]  "
          }
        />
        <div className="  [backface-visibility:hidden] w-[calc(100%-2px)] rounded-[20px] m-auto absolute bottom-0 left-0 right-0 group-hover:bg-[black] bg-opacity-50 p-4 text-white  transition-all duration-200  flex flex-col justify-between h-[calc(100%-2px)] translate-y-[80%] group-hover:translate-y-0 ">
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm">{position}</p>
          </div>
          <p className="text-sm mt-auto  ">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function page() {
  return (
    <div>
      <div className="mx-auto xl:max-w-[1380px] max-w-[720px] grid xl:grid-cols-4 sm:grid-cols-2 gap-2  pt-[6rem] pb-[12rem]   ">
        {OurPartnersList.map((partner, index) => {
          return (
            <AdvancedPartnerCard
              desc={partner.desc}
              img={partner.img}
              name={partner.name}
              position={partner.position}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default page;
