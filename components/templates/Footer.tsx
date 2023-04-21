import React, { useState, useEffect } from "react";
import FooterLinks from "@/components/molecules/FooterLinks";
import { Section } from "../Page";

export default function Footer() {
  return (
    <Section className="flex flex-col py-0 md:flex-row bg-gray text-white ">
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
                href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zain4abbas7@gmail.com&su=Subject&body=Email%20body&tf=1",
                icon: "none",
              },
              {
                content: "zainabbas@promirage.com",
                href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=zainabbas@promirage.com&su=Subject&body=Email%20body&tf=1",
                icon: "none",
              },
              {
                content: "info@promirage.com",
                href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@promirage.com&su=Subject&body=Email%20body&tf=1",
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
                href: "https://www.linkedin.com/in/zain04/",
                icon: "linkedin",
              },
              {
                content: "Behnace",
                href: "https://www.behance.net/agencymirage",
                icon: "behance",
              },
            ]}
          />
    </Section>
  );
}
