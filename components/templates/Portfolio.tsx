import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "@/types/Icon.d";
import Icon from "@/components/atoms/Icon";
type singleProjectProps = {
  className?: string;
  primary?: {
    image?: IconType;
    href: string;
    title?: string;
    description?: string;
    className?: string;
    IconClass?: string;
    width?: number;
    height?: number;
  }[];
};
const SingleProject = ({
  primary: pdata = [],
  className = "",
}: singleProjectProps) => {
  const hoverVariants = {
    initial: {
      opacity: 0,
      scale: 1,
      backdropFilter: "blur(0px)",
      bgOpacity: 0.5,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      backdropFilter: "blur(5px)",
      bgOpacity: 0.9,
    },
  };

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:auto-rows-[50vh] auto-rows-[33vh]  my-0 ${className}`}
    >
      {pdata.map((data, index) => (
        <button
          key={index}
          onClick={() => window.open(data.href, "_blank")}
          className={`relative w-full h-full aspect-w-2 aspect-h-1 overflow-hidden ${data.className}`}
        >
          <motion.div initial="initial" whileHover="hover">
            <div className="object-cover w-full h-full flex justify-center items-center">
              <Icon
                name={data.image || "none"}
                width={data.width || 60}
                height={data.height || 60}
                className={`${data.IconClass}`}
              />
            </div>
            {data.title !== "View More" && (
              <>
                <motion.div
                  className="absolute inset-0 bg-[#00000]"
                  variants={hoverVariants}
                  style={{ backdropFilter: "blur(0px)", opacity: 0.5 }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center"
                  variants={hoverVariants}
                >
                  <h2 className="text-white h5 font-normal mb-2">
                    {data.title}
                  </h2>
                  <p className="text-white body">{data.description}</p>
                </motion.div>
              </>
            )}
          </motion.div>
        </button>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="bg-gray max-w-screen-2xl w-full pb-0">
      <SingleProject
        primary={[
          {
            title: "Atoro",
            description: "Brand Identity | Website Design",
            className: "bg-[#111111] grid-2",
            image: "Atoro",
            href: "https://www.behance.net/gallery/162313635/Atoro-Brand-Identity-Design",
          },
          {
            title: "Mirage",
            description: "Brand Identity | Website Design",
            className: "bg-[#FFA939]",
            image: "Mirage",
            href: "https://www.behance.net/gallery/151250795/Mirage-Brand-Identity",
          },
          {
            title: "Threegency",
            description: "Brand Identity | Website Design",
            className: "bg-[#00011E]",
            image: "Threegency",
            href: "https://www.behance.net/gallery/161711301/Threegency-Brand-Identity-Design",
          },
          {
            title: "Creators Furniture",
            description: "Brand Identity",
            className: "bg-[#262626]",
            image: "Creators",
            href: "https://www.behance.net/gallery/151250443/Creators-Furnitures-Brand-Identity",
          },
          {
            title: "Phakki",
            description: "Brand Identity",
            className: "bg-[#0C503C]",
            width: 130,
            height: 130,
            image: "Phakki",
            href: "https://www.behance.net/gallery/153950119/Phakki",
          },
          {
            title: "View More",
            description: "Check out more of my work on Behance",
            className:
              "bg-[#0A0A0A] hover:bg-yellow backdrop-blur-none bg-opacity-100",
            image: "ViewMore",
            href: "https://www.behance.net/agencymirage",
            width: 150,
            height: 150,
          },
        ]}
        className="flex flex-wrap lg:-mx-3"
      />
    </div>
  );
};

export default Projects;
