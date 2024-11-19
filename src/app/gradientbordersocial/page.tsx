import React from "react";

import linkedin from "@/../public/pics/linkedinIcon.png";
import facebook from "@/../public/pics/facebook.png";
import instagram from "@/../public/pics/instagram.png";
import Line from "@/../public/pics/SocialMediaLine.png";

import Image from "next/image";
import Link from "next/link";

function OurSocialMedia() {
  return (
    <div className=" max-w-[1145px] mx-auto flex items-center justify-center sm:flex-nowrap flex-wrap  lg:gap-0 sm:gap-12 gap-8 ">
      <Link
        href={""}
        className=" group w-fit  transition-all duration-300 ease-in-out  "
      >
        <div className=" p-[1px] overflow-hidden rounded-[27px]  transition-all duration-300 ease-in-out CustomSocialGradiant group-hover:CustomLinkedInGradiant   ">
          <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
            <div className=" p-[1px] overflow-hidden rounded-[27px] transition-all duration-300 ease-in-out CustomSocialGradiant group-hover:CustomLinkedInGradiant     ">
              <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
                <div className=" p-[1px] overflow-hidden rounded-[27px] transition-all duration-300 ease-in-out CustomSocialGradiant group-hover:CustomLinkedInGradiant     ">
                  <div className=" bg-black  rounded-[27px] ">
                    <div className="p-[12px] overflow-hidden transition-all duration-300 ease-in-outrounded-[27px] bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_100%)] group-hover:bg-[linear-gradient(0deg,rgba(72,117,180,0.1)_0%,rgba(72,117,180,0.2)_100%)]    ">
                      <div className=" p-[10px] block  ">
                        <Image
                          src={linkedin}
                          alt=""
                          className=" grayscale-[100%] group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                          width={44}
                          height={44}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" text-white mt-4 text-[20px] font-normal leading-[38px] text-center group-hover:text-[#4A6EA9] transition-all duration-300 ease-in-out  ">
          LinkedIn
        </h2>
      </Link>
      <Image src={Line} alt="" className="mb-10 lg:block hidden" />
      <Link
        href={""}
        className=" group w-fit  transition-all duration-300 ease-in-out  "
      >
        <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomInstagramGradiant transition-all duration-300 ease-in-out   ">
          <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
            <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomInstagramGradiant transition-all duration-300 ease-in-out    ">
              <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
                <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomInstagramGradiant transition-all duration-300 ease-in-out    ">
                  <div className=" bg-black  rounded-[27px] ">
                    <div className="p-[12px] overflow-hidden rounded-[27px] bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_100%)] group-hover:bg-[linear-gradient(180deg,rgba(202,28,149,0.1)_0%,rgba(202,28,149,0.2)_100%)] transition-all duration-300 ease-in-out  ">
                      <div className=" p-[10px] block  ">
                        <Image
                          src={instagram}
                          alt=""
                          className=" grayscale-[100%] group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                          width={44}
                          height={44}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" text-white mt-4 text-[20px] font-normal leading-[38px] text-center group-hover:text-[#F36269] transition-all duration-300 ease-in-out  ">
          Instagram
        </h2>
      </Link>
      <Image src={Line} alt="" className=" mb-10 lg:block hidden  " />
      <Link
        href={""}
        className=" group w-fit  transition-all duration-300 ease-in-out  "
      >
        <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomLinkedInGradiant transition-all duration-300 ease-in-out   ">
          <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
            <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomLinkedInGradiant transition-all duration-300 ease-in-out    ">
              <div className="p-[12px] overflow-hidden rounded-[27px] bg-black   ">
                <div className=" p-[1px] overflow-hidden rounded-[27px] CustomSocialGradiant group-hover:CustomLinkedInGradiant transition-all duration-300 ease-in-out    ">
                  <div className=" bg-black  rounded-[27px] ">
                    <div className="p-[12px] overflow-hidden rounded-[27px] bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_100%)] group-hover:bg-[linear-gradient(0deg,rgba(72,117,180,0.1)_0%,rgba(72,117,180,0.2)_100%)] transition-all duration-300 ease-in-out   ">
                      <div className=" p-[10px] block  ">
                        <Image
                          src={facebook}
                          alt=""
                          className=" grayscale-[100%] group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                          width={44}
                          height={44}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" text-white mt-4 text-[20px] font-normal leading-[38px] text-center group-hover:text-[#4A6EA9] transition-all duration-300 ease-in-out  ">
          Facebook
        </h2>
      </Link>
    </div>
  );
}

export default OurSocialMedia;
