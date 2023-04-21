import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import Button from "../molecules/Button";
import Icon from "../atoms/Icon";
import { Link } from "react-scroll";
import Logo from "@/components/atoms/Logo";

type NavMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ setIsOpen } :NavMenuProps) => (
  // Add other props as necessary
  <div className="flex w-fit text-white space-x-10 sm:block">
    <Link
      className="hover:text-yellow"
      to="projects"
      smooth={true}
      duration={900}
      onClick={() => setIsOpen(false)} // Add this line
    >
      Projects
    </Link>
    <Link
      className="hover:text-yellow"
      to="services"
      smooth={true}
      duration={900}
      onClick={() => setIsOpen(false)} // Add this line
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
  const [isOpen, setIsOpen] = useState(false); // Change this line
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
      className={`flex text-white transition-colors duration-200 cursor-pointer select-none h-full h6 font-normal ${className} ${
        isOpen ? "hidden" : "block"
      }`}
    >
      {isOpen ? (
        <motion.div layout layoutId="ham" className="flex items-center">
          Close
          <Icon className="ml-3" name="cross" />
        </motion.div>
      ) : (
        <motion.div layout layoutId="ham" className="flex items-center">
          Menu
          <Icon width={25} height={25} className="ml-3" name="hamburger" />
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
      className={`z-10  fixed top-0 left-0 w-full h-screen flex flex-col justify-evenly items-center text-white space-y-5 h4 font-semibold transition-colors duration-200 cursor-pointer backdrop-blur-lg hover:text-yellow active:text-yellow lg:w-full lg:text-left lg:border-none bg-gray bg-opacity-75 py-2.5 md:py-0 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="">
        <Icon
          height={60}
          width={60}
          className="text-white cursor-pointer hover:text-yellow"
          name="cross"
        />
      </div>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-yellow"
        to="projects"
        smooth={true}
        duration={900}
      >
        Projects
      </Link>
      <Link
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-yellow"
        to="services"
        smooth={true}
        duration={900}
      >
        Services
      </Link>
      <a
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-yellow"
        href="/PDF/Zain Abbas - Design Resume.pdf"
        download
      >
        Resume
      </a>
      <Button
        onClick={() => setIsOpen(!isOpen)}
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
            <NavMenu setIsOpen={setIsOpen} /> {/* Add this prop */}
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
