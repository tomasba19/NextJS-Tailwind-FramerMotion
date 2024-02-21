"use client";

import { Download } from 'feather-icons';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const handleDownload = () => {
    const filePath = "/TomasLautaroBaroloENG.pdf";

    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'TomasLautaroBaroloENG.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  
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
          <Image src="/logoportfolio.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT COINTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold md:text-left">
            Hello, Im Tomas.
          </h1>
          {/* Description */}
          <p className="sm:text-xl md:text-3xl md:text-left font-semibold">
            Full Stack Developer.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 lg:w-1/2 flex-row items-center justify-center">
            <button onClick={handleDownload} className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Resume
            </button>
            <Link href='/contact' className="p-4 rounded-lg ring-1 ring-black">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
