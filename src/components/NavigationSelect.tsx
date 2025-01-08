"use client";

import { Links } from "@/constants/NavigationPages";
import { useRouter } from "next/navigation";

export default function NavigationSelect() {
  const router = useRouter();

  const handleNavigation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value;
    if (selectedPage) {
      router.push(selectedPage);
    }
  };

  return (
    <div className=" mx-auto mt-4 mb-[5rem] w-full flex justify-center   ">
      <select
        className="text-black rounded-md max-w-[450px] w-full py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500    "
        defaultValue=""
        onChange={handleNavigation}
      >
        <option value="" disabled>
          Select a page
        </option>
        {Links.map((item, index) => {
          return (
            <option key={index} value={item.url}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
