"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Flashcard = ({ frontText, backText }: any) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`relative w-64 h-40 bg-gray-200 rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 ${
        flipped ? "rotate-y-180" : ""
      }`}
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`absolute inset-0 p-3 flex items-center justify-center backface-hidden`}
      >
        <div
          className={`text-lg font-bold ${
            flipped ? "rotate-y-180 text-blue-600 " : ""
          }`}
        >
          {flipped ? backText : frontText}
        </div>
      </div>
    </div>
  );
};

const FlashcardList = ({ flashcards }: any) => {
  return (
    <div className="min-h-screen p-4">
      <Link href={"/courses/flashcard"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-3">
          Lesson 4: Putting It All Together
        </h1>
        <p className="text-gray-500">Click on a flashcard to flip it</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {flashcards.map((flashcard: any, index: any) => (
          <Flashcard
            key={index}
            frontText={flashcard.front}
            backText={flashcard.back}
          />
        ))}
      </div>
    </div>
  );
};

const flashcards = () => {
  const flashcards = [
    {
      front: "Integration",
      back: "the process of combining different systems, tools, or software applications to work together as a unified system",
    },
    {
      front: "Unit Testing",
      back: "a type of software testing where individual units or components of a software are tested",
    },
  ];

  return <FlashcardList flashcards={flashcards} />;
};

export default flashcards;
