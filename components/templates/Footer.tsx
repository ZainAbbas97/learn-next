import React from "react";
import { Section } from "../Page";
import Link from "next/link";
import FooterLinks from "@/components/molecules/FooterLinks";



export default function Footer() {
  return (
    <div className="flex flex-row">
      <FooterLinks
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
      />
      <FooterLinks
        heading="Connect with me"
        href="/"
        footerLinks={[
          { content: "zain4abbas7@gmail.com" },
          { content: "zainabbas@promirage.com" },
          { content: "info@promirage.com" },
        ]}
      />
    </div>
  );
}
