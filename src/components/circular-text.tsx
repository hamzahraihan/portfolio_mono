'use client';

import { useState, useEffect } from 'react';

type LetterPositionsProps = {
  char: string;
  x: number;
  y: number;
  rotation: number;
};

const CircularText = ({ text = '', radius = 100, fontSize = 20, rotation = 0, className = '' }) => {
  const [letters, setLetters] = useState<LetterPositionsProps[]>([]);

  useEffect(() => {
    const characters = text.split('');
    const angleStep = (2 * Math.PI) / characters.length;

    const letterPositions = characters.map((char, i) => {
      const angle = i * angleStep - Math.PI / 2 + (rotation * Math.PI) / 180;
      return {
        char,
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        rotation: (angle * 180) / Math.PI + 90,
      };
    });

    setLetters(letterPositions);
  }, [text, radius, rotation]);

  return (
    <div className="flex items-center justify-center h-80 w-64">
      <svg viewBox={`${-radius - fontSize} ${-radius - fontSize} ${2 * radius + 2 * fontSize} ${2 * radius + 2 * fontSize}`} className={`w-full max-w-md h-auto ${className}`}>
        {letters.map((letter, i) => (
          <text key={i} x={letter.x} y={letter.y} fontSize={fontSize} textAnchor="middle" dominantBaseline="middle" fill="currentColor" transform={`rotate(${letter.rotation} ${letter.x} ${letter.y})`}>
            {letter.char}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default CircularText;
