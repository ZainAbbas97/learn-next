import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion

type singleProjectProps = {
  primary?: {
    title?: string;
    description?: string;
    image: string;
    type: "primary";
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
        <motion.div
          key={index}
          className="relative w-1/2 h-full aspect-w-2 aspect-h-1 overflow-hidden"
          initial="initial"
          whileHover="hover"
        >
          <Image
            className="object-cover w-full h-full"
            src={data.image}
            layout="fill"
            alt=""
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
            variants={hoverVariants}
          ></motion.div>
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center"
            variants={hoverVariants}
          >
            <h2 className="text-white h6 mb-2">{data.title}</h2>
            <p className="text-white body">{data.description}</p>
          </motion.div>
        </motion.div>
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
            title: "Project 1",
            description: "This is a project",
            image: "/Images/Atoro.png",
            type: "primary",
          },
          {
            title: "Project 2",
            description: "This is another project",
            image: "/Images/Mirage.png",
            type: "primary",
          },
        ]}
      />
      <SingleProject
        primary={[
          {
            title: "Project 1",
            description: "This is a project",
            image: "/Images/Threegency.png",
            type: "primary",
          },
          {
            title: "Project 2",
            description: "This is another project",
            image: "/Images/CreatorF.png",
            type: "primary",
          },
          {
            title: "Project 3",
            description: "This is the third project",
            image: "/Images/Phakki.png",
            type: "primary",
          },
        ]}
      />
    </div>
  );
};

export default Projects;
