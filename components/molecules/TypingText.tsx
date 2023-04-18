import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  deleteDelay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 300,
  deletingSpeed = 50,
  delay = 500,
  deleteDelay = 1000,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [wait, setWait] = useState<boolean>(true);

  useEffect(() => {
    if (wait) {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < text.length) {
          setCurrentText((prev) => prev + text[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }

        if (charIndex === text.length && !isDeleting) {
          clearTimeout(timeout);
          setTimeout(() => setIsDeleting(true), deleteDelay);
        } else if (charIndex === 0 && isDeleting) {
          clearTimeout(timeout);
          setTimeout(() => setIsDeleting(false), delay);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    typingSpeed,
    deletingSpeed,
    delay,
    deleteDelay,
    charIndex,
    isDeleting,
    wait,
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWait(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span className="relative h1">
      {currentText}
      <span
        className={`absolute top-0 right-0 h-full w-1 bg-yellow typing-cursor ${
          isDeleting ? "hidden" : ""
        }`}
      ></span>
    </span>
  );
};

export default TypingText;
