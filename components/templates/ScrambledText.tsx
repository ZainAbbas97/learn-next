import React, { useEffect, useState } from "react";

type ScrambleWord = {
  text: string;
  position: { x: number; y: number };
};

const words = [
  "iconic",
  "timeless",
  "user-centered",
  "memorable",
  "minimal",
];

const getRandomPosition = (): { x: number; y: number } => {
  const x = Math.random() * 90;
  const y = Math.random() * 90;
  return { x, y };
};

const generateScrambleWords = (words: string[]): ScrambleWord[] => {
  return words.map((word) => ({
    text: word,
    position: getRandomPosition(),
  }));
};

const ScrambleTextSection: React.FC = () => {
  const [scrambleWords, setScrambleWords] = useState<ScrambleWord[]>([]);

  useEffect(() => {
    const scrambleWords = generateScrambleWords(words);
    setScrambleWords(scrambleWords);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-gray text-white">
      {scrambleWords.map((scrambleWord, index) => (
        <h1
          key={index}
          className="absolute h1 opacity-100"
          style={{
            top: `${scrambleWord.position.y}vh`,
            left: `${scrambleWord.position.x}vw`,
          }}
        >
          {scrambleWord.text}
        </h1>
      ))}
    </div>
  );
};

export default ScrambleTextSection;
