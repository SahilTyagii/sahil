'use client';
import Spline from '@splinetool/react-spline';
import React, { useEffect, useState } from 'react';
import './Default.css';

// Define the types for the props
interface CustomTypewriterProps {
  words: string[];
  typeSpeed: number;
  deleteSpeed: number;
  delaySpeed: number;
}

const CustomTypewriter: React.FC<CustomTypewriterProps> = ({
  words,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const isDeleting = deleting;

      setDisplayText(
        currentWord.slice(0, charIndex) + (isDeleting ? '' : '_')
      );

      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), delaySpeed);
      } else if (isDeleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(
      handleTyping,
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(typingInterval);
  }, [charIndex, deleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return (
    <span>
      {displayText.split(' ').map((word, index) => {
        // Define the words you want to color differently
        const coloredWords = ['Developer', 'Intern', 'Student', 'Solver'];
        const isColored = coloredWords.includes(word.replace('_', '')); // Remove cursor if present

        return (
          <span
            key={index}
            style={{ color: isColored ? '#E89AF1' : 'inherit' }}
          >
            {word}{' '}
          </span>
        );
      })}
    </span>
  );
};

const Default = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="fixed bottom-32 md:left-20 left-5 text-gray-200">
        <h1 className="text-gradient md:text-8xl text-5xl font-extrabold py-2">
          Sahil Tyagi
        </h1>
        <h1 className="md:text-3xl text-2xl">
          I am a{' '}
          <CustomTypewriter
            words={['Student', 'Front-End Intern', 'FullStack Developer', 'Problem Solver']}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>
      </div>
      <Spline scene="https://prod.spline.design/JymvQAHm4j5RC8R6/scene.splinecode" />
    </div>
  );
};

export default Default;
