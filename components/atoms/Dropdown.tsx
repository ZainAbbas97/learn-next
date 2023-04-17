import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import Icon from "./Icon";

interface DropProps {
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  label?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  label = "Select",
  placeholder = "Select an option",
}: DropProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<string>(value);

  //useEffect to see if input is in focus to open dropdown
  useEffect(() => {
    //if clicked inside container, open dropdown
    const container = containerRef.current;

    //if clicked outside container, close dropdown
    document.addEventListener("click", (e) => {
      if (container && !container.contains(e.target as Node)) {
        setIsOpen(false);
      }
    });
  }, []);

  const { height, width } = useWindowSize();
  // create and set a variable to track the width of containerRef
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // useEffect to set the width of containerRef
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef, width]);

  return (
    <div className="flex flex-col w-full text-white">
      <label className="mb-2 text-sm font-primary">{label}</label>

      <div
        className="dropdownContainer"
        ref={containerRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={`selectedOption font-primary w-full border-2 rounded-lg p-4
                    outline-none ${
                      isOpen || internalValue
                        ? "border-red"
                        : "border-dark-grey"
                    } ${
            disabled ? "bg-gray" : "bg-[#1B1B1B] bg-opacity-70"
          } flex flex-row items-center justify-center cursor-pointer`}
        >
          <input
            className="w-full bg-transparent border-none outline-none cursor-pointer"
            type="text"
            disabled={disabled}
            required={required}
            value={internalValue}
            placeholder={placeholder}
            readOnly
          />

          <Icon
            name="arrow-down"
            className={`transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ width: containerWidth }}
              className={`absolute optionsDropDownList border-2 rounded-lg border-gray text-sm mt-2`}
            >
              {options.map((option) => (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-light-grey bg-black hover:text-red px-5 py-4 cursor-pointer rounded-md z-20 flex flex-row items-center justify-between transition-all duration-300`}
                  key={option}
                  onClick={() => {
                    onChange({
                      target: {
                        value: option,
                      },
                    } as React.ChangeEvent<HTMLInputElement>);
                    setInternalValue(option);
                    setIsOpen(false);
                  }}
                >
                  <p className="body">{option}</p>
                  {internalValue === option && (
                    <Icon name="check" className="text-light-grey" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
