"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HomeNav } from "@/constants/HomeConstants";

import { ChevronRight, X, Binoculars } from "lucide-react";

import {
  backdropVariants,
  buttonVariants,
  menuItemVariants,
  sidebarVariants,
} from "@/constants/FramerAnimations";
import Link from "next/link";
import Hamburger from "hamburger-react";

const MobileSidebar = ({ isOpen, setOpen, HomeNav, location }: any) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999]"
          />

          {/* Sidebar */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-gradient-to-b from-gray-900 to-black z-[999999] overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="space-y-2 mb-4 ">
                {HomeNav.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.url}
                      onClick={() => setOpen(false)}
                      className={
                        "group flex items-center space-x-2 text-lg font-light p-3 rounded-lg transition-all"
                      }
                    >
                      <motion.span
                        className="w-full flex items-center justify-between"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item.name}
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="mt-auto mb-12 space-y-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  whileTap="tap"
                  className="w-full p-4 rounded-lg bg-[#393939] text-white text-lg font-medium transition-colors"
                >
                  Login
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full p-4 rounded-lg bg-gradient-to-r from-[#7748FF] to-[#FFB800] text-white text-lg font-medium"
                >
                  Signup
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#7748FF]/20 to-transparent pointer-events-none"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#7748FF]/20 to-transparent blur-3xl pointer-events-none"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Page = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div>
        <div className="   flex items-center justify-center  ">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <MobileSidebar
        isOpen={isOpen}
        setOpen={setOpen}
        HomeNav={HomeNav}
        location={location}
      />
    </div>
  );
};

export default Page;
