"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const QuizPage = ({ title, questions }: any) => {
  const [answers, setAnswers] = useState<any>({});

  const handleOptionChange = (questionIndex: any, optionIndex: any) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    // Add your logic for handling form submission
  };

  return (
    <div className="min-h-screen p-4">
      <Link href={"/quiz"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Quiz: {title}</h1>
        <p className="text-gray-500">Your progress is automatically saved</p>
      </div>
      <form onSubmit={handleSubmit}>
        {questions?.map((question: any, qIndex: any) => (
          <div key={qIndex} className="mb-6">
            <p className="font-bold mb-2">{question.text}</p>
            {question?.options?.map((option: any, oIndex: any) => (
              <div key={oIndex} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`question-${qIndex}-option-${oIndex}`}
                  name={`question-${qIndex}`}
                  checked={answers[qIndex] === oIndex}
                  onChange={() => handleOptionChange(qIndex, oIndex)}
                  className="mr-2"
                />
                <label htmlFor={`question-${qIndex}-option-${oIndex}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <Link href="/quiz/result">
          <button
            type="submit"
            className="bg-[#004AAD] text-white py-2 px-2 rounded-md shadow-md"
          >
            Submit Answers
          </button>
        </Link>
      </form>
    </div>
  );
};

const quiz = () => {
  const questions = [
    {
      text: "Dolor laborum adipisicing amet voluptate?",
      options: [
        "Occaecat eiusmod",
        "Occaecat eiusmod",
        "Occaecat eiusmod",
        "Occaecat eiusmod",
      ],
    },
    {
      text: "Dolor laborum adipisicing amet voluptate?",
      options: [
        "Occaecat eiusmod",
        "Occaecat eiusmod",
        "Occaecat eiusmod",
        "Occaecat eiusmod",
      ],
    },
  ];

  return <QuizPage title="Deployment" questions={questions} />;
};

export default quiz;
