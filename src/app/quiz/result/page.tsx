"use client";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const QuizResult = ({
  title,
  description,
  lastAttemptDate,
  grade,
  onRetake,
}: any) => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Link href="/quiz">
        <div className="flex items-center mb-4">
          <FaArrowLeft className="text-lg cursor-pointer" />
          <h1 className="ml-2 text-md font-semibold">Lesson 5: {title}</h1>
        </div>
      </Link>

      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">Quiz: {title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-blue-500 font-extralight mb-2">
          Last Attempt: {lastAttemptDate}
        </p>
        <p className="text-blue-600 mb-4">Received grade: {grade}%</p>
        <Link href={"/quiz/questions"}>
          <button
            onClick={onRetake}
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
          >
            Retake Quiz
          </button>
        </Link>
      </div>
      <Link href={"/courses/video"}>
        <div className="fixed flex m-3 right-0 bottom-0 items-center">
          <h1 className="ml-2 text-md">Next</h1>
          <GrFormNextLink className="text-2xl cursor-pointer" />
        </div>
      </Link>
    </div>
  );
};

const QuizResultPage = () => {
  const handleRetake = () => {
    console.log("Retake Quiz clicked");
  };

  return (
    <QuizResult
      title="Deployment"
      description="Adipisicing et proident ex aliqua in duis voluptate aliqua aliquip. Adipisicing sit aliquip id ut reprehenderit enim est. Veniam dolore nisi officia proident ex excepteur ut labore ad esse sunt ut. Ipsum sunt repreh"
      lastAttemptDate="July 7, 2024 at 10:32 AM"
      grade={50}
      onRetake={handleRetake}
    />
  );
};

export default QuizResultPage;
