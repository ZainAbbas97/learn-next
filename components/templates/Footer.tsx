import React from "react";
import { Section } from "../Page";
import Link from "next/link";
import FooterLinks from "@/components/molecules/FooterLinks";
import { IconType } from "@/types/Icon.d";



export default function Footer() {
  return (
    <div className="flex flex-row">
      {/* <FooterLinks
        href="Logo"
        footerLinks={[{ content: "© 2023, All Rights Reserved" }]}
      />
      <FooterLinks
        heading="Contact Me"
        href="/"
        footerLinks={[
          { content: "zain4abbas7@gmail.com" },
          { content: "zainabbas@promirage.com" },
          { content: "info@promirage.com" },
        ]}
      /> */}
      <FooterLinks
        specialUseCase="logo"
        footerLinks={[
          {
            content: "© 2023, All Rights Reserved",
            href: "",
            icon: "none",
          },
        ]}
      />
      <FooterLinks
        heading="Get In Touch"
        specialUseCase=""
        footerLinks={[
          {
            content: "zain4abbas7@gmail.com",
            href: "https://www.facebook.com/",
            icon: "none",
          },
          {
            content: "zainabbas@promirage.com",
            href: "https://www.instagram.com/",
            icon: "none",
          },
          {
            content: "info@promirage.com",
            href: "https://www.facebook.com/",
            icon: "none",
          },
        ]}
      />

      <FooterLinks
        heading="Connect With Me"
        specialUseCase=""
        footerLinks={[
          {
            content: "LinkedIn",
            href: "https://www.facebook.com/",
            icon: "linkedin",
          },
          {
            content: "Behnace",
            href: "https://www.behnace.com/",
            icon: "behance",
          },
        ]}
      />

      {/* 
      <FooterLinks
        heading="Connect with me"
        specialUseCase="icon"
        footerLinks={[
          {
            content: "zain4abbas7@gmail.com",
            href: "https://www.facebook.com/"
            icon: "none",,
          },
          {
            content: "zainabbas@promirage.com",
            href: "https://www.instagram.com/"
            icon: "none",,
          },
          { content: "info@promirage.com", href: "https://www.facebook.com/" 
        icon: "none",},
        ]}
      /> */}
    </div>
  );
}
