"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";

const LessonDetail = ({ videoSrc, title, transcript, references }: any) => {
  const [activeTab, setActiveTab] = useState("transcript");

  return (
    <div className="min-h-screen p-4">
      <Link href={"/courses/video"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="text-2xl cursor-pointer" />
          <h1 className="ml-2 text-lg font-bold">{title}</h1>
        </div>
      </Link>

      <div className="bg-black rounded-lg overflow-hidden relative">
        <video className="w-full h-auto" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white text-6xl" />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab("transcript")}
            className={`pb-2 mr-4 ${
              activeTab === "transcript"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            Transcript
          </button>
          <button
            onClick={() => setActiveTab("references")}
            className={`pb-2 ${
              activeTab === "references"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            References
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          {activeTab === "transcript" ? (
            <p className="text-gray-700">{transcript}</p>
          ) : (
            <p className="text-gray-700">{references}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const LessonPage = () => {
  const videoSrc = "/path-to-your-video.mp4";
  const transcript =
    "Laborum culpa excepteur proident magna est officia elit...";
  const references = "Reference content goes here...";

  return (
    <div>
      <LessonDetail
        videoSrc={videoSrc}
        title="Lesson 5: Deployment"
        transcript={transcript}
        references={references}
      />
      <Link href={"/quiz"}>
        <div className="fixed flex m-3 right-0 bottom-0 items-center">
          <h1 className="ml-2 text-md">Next</h1>
          <GrFormNextLink className="text-2xl cursor-pointer" />
        </div>
      </Link>
    </div>
  );
};

export default LessonPage;
