"use client";

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
    <select
      className="text-black rounded-md py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      defaultValue=""
      onChange={handleNavigation}
    >
      <option value="" disabled>
        Select a page
      </option>
      <option value="/gradientbordersocial">Gradient Border Social</option>
      <option value="/about">About</option>
      <option value="/contact">Contact</option>
      <option value="/services">Services</option>
    </select>
  );
}
