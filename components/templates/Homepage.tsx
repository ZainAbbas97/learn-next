import React, { useState, useEffect } from "react";
import Navbar from "@/components/molecules/Navbar";
import { Section } from "../Page";
import Image from "next/image";
import TypingText from "../molecules/TypingText";
import SlidingText from "../atoms/SlidingText";

export default function Homepage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="flex pt-0 justify-between h-screen items-center bg-gray text-white">
        <Section className="w-fit">
          <div className="space-y-10">
            <div className="flex">
              <SlidingText
                text={`Hi, I'm `}
                animDuration={5}
                className={`h1 `}
              />
              <TypingText text="Zain Abbas" />
            </div>

            <div className="space-y-5 w-10/12">
              <SlidingText
                text={`Brand Designer | UI & UX Designer`}
                animDuration={5}
                className={`h5-regular uppercase font-normal text-yellow`}
              />
              <SlidingText
                text={`I am a passionate individual whose goal is to provide more employment opportunities to the people of Pakistan as well as educate them about technology and design.`}
                animDuration={1}
                className={`body`}
              />
            </div>
            {/* <Button
              label="Lets Get In Touch"
              type="primary"
              size="lg"
              icon="airplane"
              href="/"
            /> */}
          </div>
        </Section>
        <Section className="pt-0">
          <div
            style={{
              height: "75vh",
              paddingBottom: "calc(75vh * 1.1342)",
              position: "relative",
            }}
            className="relative w-full md:none overflow-hidden"
          >
            <Image
              className="object-contain mt-0 pt-0 mx-0 absolute top-0 left-0 h-full w-full"
              src="/Images/Zain.png"
              fill
              alt=""
            />
          </div>
        </Section>
      </main>
    </>
  );
}
