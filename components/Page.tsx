import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import React from "react";
import Footer from "./templates/Footer";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`bg-gray w-full text-white`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-screen-2xl py-24 px-[5vw] mx-auto flex items-start flex-wrap w-full z-10 flex-col justify-between ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

type Props = {
  children: React.ReactNode;
  tabTitle: string;
  className?: string;
  description?: string;
  navLinks?: any;
  tags?: string;
};

export default function Page({
  className,
  tabTitle,
  children,
  description,
  navLinks,
  tags,
}: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed origin-top right-0 top-0 w-2 bg-gradient-to-b from-transparent to-red h-screen z-[100]"
        style={{ scaleY: scrollYProgress }}
      />

      <main className={`${className && className}`}>
        <Head>
          <title>{`${tabTitle} | Atoro`}</title>
          <meta
            name="description"
            content={
              description ||
              "Atoro is a leading Security Certification Consulting company based in Ireland. Our team of experts provides comprehensive security solutions to businesses of all sizes. Contact us today to learn how we can help you safeguard your assets and protect your reputation."
            }
          />

          <meta
            name="keywords"
            content={
              tags ||
              "security, certification, consulting, ireland, atoro, atoro.ie, atoro security, atoro security certification, atoro security consulting, atoro security ireland, atoro security certification ireland, atoro security consulting ireland, atoro security certification consulting ireland"
            }
          />

          <link rel="icon" href="/favicon.svg" />
        </Head>

        {children}
      </main>
    </>
  );
}
