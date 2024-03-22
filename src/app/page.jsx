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
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-4 flex justify-center items-center p-14">
          <Image
            src="/dhpic.jpeg"
            alt=""
            className="object-contain rounded-full border-4 border-gray-700 w-40 lg:w-full"
            width={600}
            height={767}
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center mt-14 md:mt-20 lg:mt-0">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Front-end Developer, Musician and an Artist!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Frontend developer exploring the world of backend development and
            Machine Learning. Musician at heart, creating unique piano covers in
            my free time.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 hover:scale-110 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black duration-200 hover:border-2 border-black">
              <a href="/portfolio">View My Work</a>
            </button>
            <button className="p-4 hover:scale-110 rounded-lg ring-1 ring-black hover:bg-black hover:text-white hover:border-2 border-white duration-200">
            <a href="/contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
