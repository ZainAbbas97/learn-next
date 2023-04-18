// components/TypingText.tsx

import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < text.length) {
          setCurrentText((prev) => prev + text[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }

        if (charIndex === text.length) {
          setIsDeleting(true);
          clearTimeout(timeout);
          setTimeout(() => {
            setIsDeleting(false);
          }, delay);
        } else if (charIndex === 0) {
          setIsDeleting(false);
          clearTimeout(timeout);
          setTimeout(() => {
            setIsDeleting(false);
          }, delay);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, typingSpeed, deletingSpeed, delay, charIndex, isDeleting]);

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
