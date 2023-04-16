import React from "react";
import Navbar from "@/components/molecules/Navbar";
import { IconType } from "@/types/Icon.d";
import Icon from "@/components/atoms/Icon";
import Image from "next/image";
import Button from "../molecules/Button";

export default function Homepage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main className="flex justify-between w-screen h-screen bg-gray text-white">
        <div className="grid-temp  space-y-10 w-7/12 mt-12">
          <span className="h1">Hi, I Am Zain Abbas</span>
          <div className="space-y-5">
            <p className="h5-regular uppercase font-normal text-yellow">
              Brand Designer | UI & UX Designer
            </p>

            <p className="body">
              I am a passionate young individual whose goal is to provide more
              employment opportunities to the people of Pakistan as well as
              educate them about technology and design. I want to change things;
              show people that technology & design isn’t just limited to
              software development & graphic design. People need to be educated
              on how these skills can help them make better decisions in their
              personal lives and careers.
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

        <div
          style={{ height: "75vh" }}
          className="relative w-full md:w-1/2 mt-10"
        >
          <Image
            className="z-20 object-contain w-full mx-auto"
            src="/Images/HomepageImage.png"
            fill
            alt=""
          />
        </div>
      </main>
    </>
  );
}
