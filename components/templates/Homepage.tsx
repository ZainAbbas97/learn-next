import React, { useState, useEffect } from "react";
import Navbar from "@/components/molecules/Navbar";
import Button from "../molecules/Button";
import { Section } from "../Page";
import Image from "next/image";
import TypingText from "../molecules/TypingText";
// Add framer motion
import { motion } from "framer-motion";



export default function Homepage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="flex pt-0 justify-between h-screen items-center bg-gray text-white">
          <Section className="w-1/2 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`flex items-start`}
            >
            <div className="space-y-10">
              <div className="flex">
                <span className="h1">Hi, </span>
                <span className="h1">&nbsp;</span>
                <TypingText text="I'm Zain Abbas" />
              </div>

              <div className="space-y-5">
                <p className="h5-regular uppercase font-normal text-yellow">
                  Brand Designer | UI & UX Designer
                </p>
                <p className="body">
                  I am a passionate individual whose goal is to provide more
                  employment opportunities to the people of Pakistan as well as
                  educate them about technology and design. I want to change
                  things; show people that technology & design isn’t just
                  limited to software development & graphic design. People need
                  to be educated on how these skills can help them make better
                  decisions in their personal lives and careers.
                </p>
              </div>
              <Button
                label="Lets Get In Touch"
                type="primary"
                size="lg"
                icon="airplane"
                href="/"
              />
            </div>
          </motion.div>
          </Section>
          <div
            style={{ height: "75vh" }}
            className="relative w-full md:w-1/2 mt-10"
          >
            <Image
              className="object-contain w-full mt-0 pt-0 mx-auto"
              src="/Images/HomepageImage.png"
              fill
              alt=""
            />
          </div>
        </main>
    </>
  );
}
