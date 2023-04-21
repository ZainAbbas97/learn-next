import React, { useState, useEffect } from "react";
import Navbar from "@/components/molecules/Navbar";
import { Section } from "../Page";
import Image from "next/image";
import TypingText from "../molecules/TypingText";
import SlidingText from "../atoms/SlidingText";

export default function Homepage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024); // adjust the threshold as needed
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray">
      <nav>
        <Navbar />
      </nav>
      <main className="flex pt-0 justify-between h-screen items-center bg-gray text-white">
        <Section className="w-{100vw} lg:w-full">
          <div className="space-y-10">
            <div className="flex flex-wrap">
              <SlidingText
                text={`Hi, I'm `}
                animDuration={5}
                className={`h1 `}
              />
              <TypingText text="Zain Abbas" />
            </div>

            <div className="space-y-5 ">
              <SlidingText
                text={`Brand Designer | UI & UX Designer`}
                animDuration={5}
                className={`h5-regular uppercase font-normal text-yellow`}
              />
              <SlidingText
                text={`A loud ambivert with a passion for discussing ideas and pushing boundaries.`}
                animDuration={1}
                className={`body`}
              />
            </div>
          </div>
        </Section>

        {isLargeScreen && (
          <Section className="pt-0">
            <div
              style={{
                height: "60vh",
                position: "relative",
              }}
              className="hidden relative lg:w-full lg:block overflow-hidden"
            >
              <Image
                className="object-contain mt-0 pt-0 mx-0 absolute top-0 left-0 h-full w-full"
                src="/Images/Zain.png"
                fill
                alt=""
              />
            </div>
          </Section>
        )}
      </main>
    </div>
  );
}
