"use client";
import { useRef } from "react";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(
    skillRef,
    { margin: "-100px" },
    { once: true }
  );

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(
    experienceRef,
    { margin: "-100px" },
    { once: true }
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*CONTAINER*/}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/*BIOGRAPHY CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center">
            {/*BIOGRAPHY TITTLE*/}
            <h1 className="font-bold text-2xl">About Me</h1>
            {/*BIOGRAPHY DESCRIPTION*/}
            <p className="text-lg">
              Since a young age, my fascination with technology has led me to
              immerse myself in the world of web development. In 2023, I decided
              to fully commit to this passion.
              <p>
                Im excited to share my knowledge with leading companies in the
                industry, with the purpose of growing professionally and
                strengthening both my technical and soft skills.
              </p>
            </p>
            {/*BIOGRAPHY QUOTE*/}
            <span className="italic">If you can dream it, you can do it.</span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/*SKILLS CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/*SKILLS TITTLE*/}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/*SKILLS LIST*/}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostGres
              </div>
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                FramerMotion
              </div>
            </motion.div>
            {/*SKILLS SCROLL SVG*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/*EXPERIENCE CONTAINER*/}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/*EXPERIENCE TITTLE*/}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/*EXPERIENCE LIST*/}
            <motion.div
              initial={{ x: "-400px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/*EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*JOB TITLE*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Full Stack Developer
                  </div>
                  {/*JOB DESCRIPTION*/}
                  <div className="p-3 text-sm italic">
                    Bootcamp specialized on web developtment.
                    During the bootcamp, I completed multiple tests and had the
                    opportunity to work on various projects. This allowed me to
                    acquire valuable experience working with others using the
                    Scrum methodology for agile team management.
                  </div>
                  {/*JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023
                  </div>
                  {/*JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    SoyHenry BootCamp
                  </div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6 flex justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>
              {/*EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3"></div>
                {/*CENTER*/}
                <div className="w-1/6 flex justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3">
                  {/*JOB TITLE*/}
                  <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg"></div>
                  {/*JOB DESCRIPTION*/}
                  <div className="p-3 text-sm italic"></div>
                  {/*JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold"></div>
                  {/*JOB COMPANY*/}
                  <div className="p-1 rounded text-sm font-semibold w-fit"></div>
                </div>
              </div>
              {/*EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/*LEFT*/}
                <div className="w-1/3">
                  {/*JOB TITLE*/}
                  <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg"></div>
                  {/*JOB DESCRIPTION*/}
                  <div className="p-3 text-sm italic"></div>
                  {/*JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold"></div>
                  {/*JOB COMPANY*/}
                  <div className="p-1 rounded  text-sm font-semibold w-fit"></div>
                </div>
                {/*CENTER*/}
                <div className="w-1/6 flex justify-center">
                  {/*LINE*/}
                  <div className="w-1 h-full  rounded relative">
                    {/*LINE CIRCLE*/}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*RIGHT*/}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/*SVG CONTAINER*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
