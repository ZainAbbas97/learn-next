import React from "react";
import { motion } from "framer-motion";

let sentenceLetter = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

let sentenceWord = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

const letter = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

type Props = {
  text: string;
  type?: "word" | "letter";
  className?: string;
  animDuration?: number;
};

export default function SlidingText({
  text,
  type = "letter",
  className = "text-white",
  // total duration of the animation, in seconds
  animDuration = 1,
}: Props) {
  if (type === "word") {
    sentenceWord.show.transition.staggerChildren =
      animDuration / text.split(" ").length;
    return (
      <motion.div
        variants={sentenceWord}
        whileInView="show"
        initial="hidden"
        className={className}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              variants={letter}
              key={index}
              className={`mr-[0.25em] whitespace-nowrap inline-block`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  } else {
    sentenceLetter.show.transition.staggerChildren = animDuration / text.length;

    return (
      <motion.div
        variants={sentenceLetter}
        whileInView="show"
        initial="hidden"
        className={className}
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={index}
              className={`mr-[0.25em] whitespace-nowrap inline-block`}
            >
              {word.split("").map((char, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={letter}
                    className={`!-mr-[0.03em]`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }
}
