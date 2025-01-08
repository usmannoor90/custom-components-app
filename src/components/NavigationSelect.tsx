"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Links } from "@/constants/NavigationPages";

const NavigationSelect = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string>("");

  // Update current path when component mounts and when route changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavigation = (value: string) => {
    router.push(value);
    setCurrentPath(value);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-4 mb-20 bg-black  ">
      <Select value={currentPath} onValueChange={handleNavigation}>
        <SelectTrigger className="w-full bg-white  backdrop-blur-sm border-gray-200 hover:bg-gray-50 transition-colors">
          <SelectValue placeholder="Select a page" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px] overflow-y-auto">
          {Links.map((item, index) => (
            <SelectItem
              key={index}
              value={item.url}
              className={`cursor-pointer ${
                currentPath === item.url ? "bg-gray-100" : ""
              }`}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default NavigationSelect;
