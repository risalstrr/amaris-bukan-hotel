"use client";
import Link from "next/link";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const QuizDetail = ({ title, description, onNext, onPrevious }: any) => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Link href={"/courses/occupational"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className=" p-4">
        <h2 className="text-3xl font-bold mb-4">Quiz: {title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={"/quiz/questions"}>
          <button className="bg-[#004AAD] text-white py-2 px-4 rounded-md shadow-md">
            Take Quiz Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const QuizPage = () => {
  const handleNext = () => {
    console.log("Next clicked");
  };

  const handlePrevious = () => {
    console.log("Previous clicked");
  };

  return (
    <QuizDetail
      title="Deployment"
      description="Adipisicing et proident ex aliqua in duis voluptate aliqua aliquip. Adipisicing sit aliquip id ut reprehenderit enim est. Veniam dolore nisi officia proident ex excepteur ut labore ad esse sunt ut. Ipsum sunt repreh"
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  );
};

export default QuizPage;
