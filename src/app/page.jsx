"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE COINTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-12">
          <Image src="/homeImage.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT COINTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Full Stack Developer.
          </h1>
          {/* Description */}
          <p className="md:text-xl">
            Make it work, make it right, make it fast.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 lg:w-1/2 flex-row items-center justify-center">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Projects
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
