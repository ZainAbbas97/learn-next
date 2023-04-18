import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import router from "next/router";
import Heading from "@/components/atoms/Heading";

type singleProjectProps = {
  primary?: {
    title?: string;
    description?: string;
    image: string;
    type: "primary";
    href: string;
  }[];
};

const SingleProject = ({ primary: pdata = [] }: singleProjectProps) => {
  const hoverVariants = {
    initial: { opacity: 0, scale: 1 },
    hover: { opacity: 1, scale: 1.05 },
  };

  return (

    <div style={{ height: "75vh" }} className="flex my-0">
      {pdata.map((data, index) => (
        <button
          key={index}
          onClick={() => router.push(data.href)}
          className="relative w-1/2 h-full aspect-w-2 aspect-h-1 overflow-hidden"
        >
          <motion.div initial="initial" whileHover="hover">
            <Image
              className="object-cover w-full h-full"
              src={data.image}
              layout="fill"
              alt=""
            />
            <motion.div
              className="absolute inset-0 bg-[#00000] bg-opacity-50 backdrop-blur-md"
              variants={hoverVariants}
            ></motion.div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center"
              variants={hoverVariants}
            >
              <h2 className="text-white h5 font-normal mb-2">{data.title}</h2>
              <p className="text-white body">{data.description}</p>
            </motion.div>
          </motion.div>
        </button>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray">
      <SingleProject
        primary={[
          {
            title: "Atoro",
            description: "Brand Identity | Website Design",
            image: "/Images/Atoro.png",
            type: "primary",
            href: "/",
          },
          {
            title: "Mirage",
            description: "Brand Identity | Website Design",
            image: "/Images/Mirage.png",
            type: "primary",
            href: "/",
          },
        ]}
      />
      <SingleProject
        primary={[
          {
            title: "Threegency",
            description: "Brand Identity | Website Design",
            image: "/Images/Threegency.png",
            type: "primary",
            href: "/",
          },
          {
            title: "Creators Furniture",
            description: "Brand Identity",
            image: "/Images/CreatorF.png",
            type: "primary",
            href: "/",
          },
          {
            title: "Phakki",
            description: "Brand Identity",
            image: "/Images/Phakki.png",
            type: "primary",
            href: "https://www.youtube.com/shorts/ja28L9cUKG4",
          },
        ]}
      />
    </div>
  );
};

export default Projects;
