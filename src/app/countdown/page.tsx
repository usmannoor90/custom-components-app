"use client";
import Image from "next/image";
// import coomingsoonimg from "../pics/CoomingSoonImg.png";

import { useCountdown } from "./useCountdown";

function Page() {
  const FUTURE_DAYS_IN_MS = 100 * 24 * 60 * 60 * 10000;

  const NOW_IN_MS = 1721733399942;

  const targetDate = NOW_IN_MS + FUTURE_DAYS_IN_MS;

  const [days, hours, minutes] = useCountdown(targetDate);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center  max-w-[762px] mx-auto ">
        <Image src={""} alt="coomingsoonimg" width={500} height={500} />
        <div className=" mt-[-100px] ">
          <p className=" text-white text-[28.53px] font-[500] leading-[30.31px] text-center">
            Maincore is Arriving Soon
          </p>
          <p className=" text-[16px] font-normal leading-[26.3px] text-center text-white max-w-[500px] mt-6 ">
            Presenting Maincore, a platform that merges the dexterity of
            Aritifical Intelligence with latest trends in Web3 Technology to
            give you ecosystem unmatched by others
          </p>
          <div>
            {days + hours + minutes <= 0 ? (
              <>
                <div className="expired-notice">
                  <span>Expired!!!</span>
                  <p>Please select a future date and time.</p>
                </div>
              </>
            ) : (
              <>
                <div className=" flex justify-center sm:gap-2 gap-1 mt-4   ">
                  <DateTimeDisplay
                    value={days}
                    type={"Days"}
                    isDanger={days <= 3}
                  />
                  <p>:</p>
                  <DateTimeDisplay
                    value={hours}
                    type={"Hours"}
                    isDanger={false}
                  />
                  <p>:</p>
                  <DateTimeDisplay
                    value={minutes}
                    type={"Mins"}
                    isDanger={false}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

type boxType = {
  value: number;
  type: string;
  isDanger: boolean;
};

const DateTimeDisplay = ({ value, type, isDanger }: boxType) => {
  return (
    <div
      className={` text-white flex flex-col items-center    ${
        isDanger ? "countdown danger" : "countdown"
      }`}
    >
      <div className="  text-[30px] font-normal leading-[14px] text-left flex items-center  gap-1  ">
        <p className=" bg-[#171718] py-5 px-3 shadow-sm shadow-[rgba(255,255,255,0.3)] rounded-[4px]">
          {" "}
          {value.toString().split("")[0]}
        </p>
        :
        <p className=" bg-[#171718] py-5 px-3 shadow-sm shadow-[rgba(255,255,255,0.3)] rounded-[4px] ">
          {value.toString().split("")[1]}
        </p>
      </div>
      <span className=" mt-4 text-[12px] font-normal leading-[14px] text-left text-[#8443F5] ">
        {type}
      </span>
    </div>
  );
};
