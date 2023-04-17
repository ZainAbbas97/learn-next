import React from "react";
import Image from "next/image";
import { Section } from "../Page";

type singleProjectProps = {
  primary?: {
    title?: string;
    description?: string;
    image: string;
    type: "primary";
  }[];
};

const SingleProject = ({ primary: pdata=[] }: singleProjectProps) => {
  return (
    <div style={{ height: "75vh" }} className="relative mx-0">
      {pdata.map((data, index) => (
        <Image
          key={index}
          className="object-cover w-full mx-0"
          src={data.image}
          fill
          alt=""
        />
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <main>
      <SingleProject
        primary={[
          {
            title: "Project 1",
            description: "This is a project",
            image: "/Images/Atoro.png",
            type: "primary",
          },
          {
            title: "Project 1",
            description: "This is a project",
            image: "/Images/Atoro.png",
            type: "primary",
          },
        ]}
      />
    </main>
  );
};

export default Projects;
