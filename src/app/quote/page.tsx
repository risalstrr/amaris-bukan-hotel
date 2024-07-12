"use client";
import React from "react";
import Link from "next/link";

const QuotePage = ({ quote, author, buttonText, onButtonClick }: any) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="p-8 mb-8">
        <p className="text-2xl italic text-gray-700 mb-4">
          &quot;{quote}&quot;
        </p>
        <p className="text-lg font-bold text-gray-900">- {author}</p>
      </div>
      <div className="flex flex-col w-full px-8 justify-center items-center gap-10">
        <Link
          href={"/home"}
          className="lg:w-full w-full max-w-[350px] py-2 text-md text-white text-center rounded-xl bg-[#004AAD] hover:scale-105 active:scale-95 transition-all"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const Quote = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <QuotePage
      quote="The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar."
      author="Brandon Sanderson, Oathbringer"
      buttonText="Take Me to My Next Step"
      onButtonClick={handleButtonClick}
    />
  );
};

export default Quote;
