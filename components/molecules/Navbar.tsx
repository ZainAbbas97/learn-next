import React from "react";
import Button from "@/components/molecules/Button";
// import Link from "next/link";
import { Link } from "react-scroll";
import Logo from "@/components/atoms/Logo";

export default function Hero() {
  return (
    <nav className="w-full pt-10 px-[5vw] bg-gray h-fit flex justify-between items-center">
      <Logo />
      <div className="flex w-fit text-white space-x-10">
          <Link
            className="hover:text-yellow"
            to="projects"
            smooth={true}
            duration={900}
          >
            Projects
          </Link>

        <Link
          className="hover:text-yellow"
          to="services"
          smooth={true}
          duration={900}
        >
          Services
        </Link>

        <a
          className="hover:text-yellow"
          href="/PDF/Zain Abbas - Design Resume.pdf"
          download
        >
          Resume
        </a>
      </div>

      <Button
        size="sm"
        type="primary"
        label="Book A Call"
        className=""
        icon="none"
        href="https://tidycal.com/zainabbas"
      />
    </nav>
  );
}
