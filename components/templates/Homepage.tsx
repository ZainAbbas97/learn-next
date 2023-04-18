import React, { useState, useEffect } from "react";
import Navbar from "@/components/molecules/Navbar";
import Button from "../molecules/Button";
import { Section } from "../Page";
import Image from "next/image";
import Typist from "react-typist";

export default function Homepage() {
  const [typing, setTyping] = useState(true);

  const onTypingDone = () => {
    setTyping(false);
    setTimeout(() => {
      setTyping(true);
    }, 1000);
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main className="flex pt-0 justify-between h-screen items-center bg-gray text-white">
        <Section className="flex pt-0 w-1/2">
          <div className="space-y-10">
            <div className="flex">
              <span className="h1">Hi, </span>
              <span className="h1">&nbsp;</span>
              {typing ? (
                <Typist
                  className="h1"
                  onTypingDone={onTypingDone}
                  cursor={{
                    show: true,
                    blink: true,
                    element: "|",
                    hideWhenDone: false,
                    hideWhenDoneDelay: 1000,
                  }}
                >
                  <span>I'm Zain Abbas</span>
                  <Typist.Backspace count={12} delay={1000} />
                </Typist>
              ) : null}
            </div>
            <div className="space-y-5">
              <p className="h5-regular uppercase font-normal text-yellow">
                Brand Designer | UI & UX Designer
              </p>
              <p className="body">
                I am a passionate individual whose goal is to provide more
                employment opportunities to the people of Pakistan as well as
                educate them about technology and design. I want to change
                things; show people that technology & design isn’t just limited
                to software development & graphic design. People need to be
                educated on how these skills can help them make better decisions
                in their personal lives and careers.
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
        </Section>
        <div
          style={{ height: "75vh" }}
          className="relative w-full md:w-1/2 mt-10"
        >
          <Image
            className="z-20 object-contain w-full pt-0 mx-auto"
            src="/Images/HomepageImage.png"
            fill
            alt=""
          />
        </div>
      </main>
    </>
  );
}
