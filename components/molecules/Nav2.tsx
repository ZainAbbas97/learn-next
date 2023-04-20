import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import Button from "../molecules/Button";
import Icon from "../atoms/Icon";
import { Section } from "../Page";
import { Link } from "react-scroll";
import Logo from "@/components/atoms/Logo";

const NavMenu = () => (
  <div className="flex w-fit text-white space-x-10 sm:block">
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
);

export default function Nav2() {
  const { width } = useWindowSize();
  const { height } = useWindowSize();
  const [isOpen, setIsOpen] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (width > 0) {
      if (width >= 640) {
        setIsOpen(false);
        setShowIcon(false);
      } else {
        setShowIcon(true);
        setIsOpen(true);
      }
    }
  }, [width, height]);

  type Props = {
    className?: string;
  };

  const HamburgerIcon = ({ className }: Props) => (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={`flex text-white transition-colors duration-200 cursor-pointer select-none h-full body ${className} ${
        isOpen ? "hidden" : "block"
      }`}
    >
      {isOpen ? (
        <motion.div layout layoutId="ham" className="flex items-center">
          Close
          <Icon className="ml-2" name="cross" />
        </motion.div>
      ) : (
        <motion.div layout layoutId="ham" className="flex items-center">
          Menu
          <Icon className="ml-2" name="hamburger" />
        </motion.div>
      )}
    </motion.div>
  );

  const HamburgerMenu = ({ setIsOpen, isOpen }) => (
    <motion.div
      className={`fixed top-0 left-0 w-full h-screen bg-yellow-700 bg-opacity-75 flex flex-col items-center text-white space-y-5 pt-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div onClick={() => setIsOpen(!isOpen)}>
    <Icon height={25} width={25} className="text-white" name="cross" />
      </div>
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
      <Button
        size="sm"
        type="primary"
        label="Book A Call"
        className="text-white"
        icon="none"
        href="https://tidycal.com/zainabbas"
      />
    </motion.div>
  );

  return (
    <Section>
      <nav className="w-full pt-10 px-[5vw] bg-gray h-fit flex justify-between items-center">
        <Logo 
            className={`${
        isOpen ? "hidden" : "block"
      }`}
        
        />
        {showIcon && <HamburgerIcon className="ml-auto" />}
        {(width >= 640 || !showIcon) && (
          <>
            <NavMenu />
            <Button
              size="sm"
              type="primary"
              label="Book A Call"
              className="hidden sm:block"
              icon="none"
              href="https://tidycal.com/zainabbas"
            />
          </>
        )}
      </nav>
      <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </Section>
  );
}