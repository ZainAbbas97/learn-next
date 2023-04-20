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

  interface HamburgerMenuProps {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
  }

  const HamburgerMenu = ({ setIsOpen, isOpen }: HamburgerMenuProps) => (
    <motion.div
      className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center text-white space-y-5 h4 font-normal transition-colors duration-200 cursor-pointer active:text-yellow body lg:w-full lg:text-left lg:border-none bg-gray bg-opacity-100 py-2.5 md:py-0 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="">
        <Icon
          height={40}
          width={40}
          className="text-white cursor-pointer hover:text-yellow"
          name="cross"
        />
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
        size="lg"
        type="primary"
        label="Book A Call"
        className="text-white"
        icon="none"
        href="https://tidycal.com/zainabbas"
      />
    </motion.div>
  );

  return (
    <>
      <nav className="w-full pt-10 px-[5vw] bg-gray h-fit flex justify-between items-center">
        <Logo className={`${isOpen ? "hidden" : "block"}`} />
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
    </>
  );
}
