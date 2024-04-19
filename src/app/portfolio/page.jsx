"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Upease",
    desc: "Developed and maintained the front-end of the company's website using Nextjs, TypeScript, Tailwind CSS, and DaisyUI, and working on core products.",
    img: "/upez.jpg",
    link: "https://www.upease.biz/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "LifekShell",
    desc: "Collaborated with a team to develop LifekShell, a dynamic website tailored for a medical company, built with GatsbyJS and powered by GraphQL.",
    img: "/lifeshell.jpeg",
    link: "https://www.lifeshell.co.in/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Diamond Estate",
    desc: "Personal Project to create  a dynamic website tailored for a students and residents of Manipal, built with Nextjs Javascript and TailwindCSS.",
    img: "/logos.svg",
    link: "https://diamond-estate.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Sheet-Music",
    desc: "Personal Project to create a website that has all of my available sheets created since I started uploading them on youtube.",
    img: "https://images.pexels.com/photos/7520832/pexels-photo-7520832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-8 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center  gap-8 bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex w-full gap-8 justify-evenly text-white">
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="flex flex-col justify-around items-center">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>

                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex ">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">{`${
                        item.title === "Sheet-Music"
                          ? "in progress"
                          : "See Demo"
                      }`}</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
