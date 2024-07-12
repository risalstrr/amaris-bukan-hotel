/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

const LearningCard = ({ imageSrc, title, author, progress }: any) => {
  return (
    <div className="bg-white mb-5 rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageSrc}
        width={600}
        height={300}
        objectFit="cover"
        alt={title}
        className="w-full h-32"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{author}</p>
        <div className="flex items-center mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="ml-2 text-gray-700">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default function page() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <Link href={"/courses"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold">Occupational Skills</h1>
      <form className="flex flex-row items-center my-3 max-w-sm mx-auto">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..."
            required
          />
        </div>
        <GiSettingsKnobs className="w-14" />
      </form>

      <div className="flex justify-between text-sm w-full items-center mb-4">
        <p>Don&apos;t know what you can offer?</p>
        <Link href={"/career/test"}>
          <button className="bg-[#004AADFF] text-white py-2 px-2 rounded-md shadow-md">
            Take Our Quiz
          </button>
        </Link>
      </div>

      {/* === */}
      <Link href={"/courses/review"}>
        <LearningCard
          imageSrc="https://i.ytimg.com/vi/GE2qnXC8UMg/maxresdefault.jpg"
          title="HTML Advanced"
          author="Jane Doe"
          category="Tech"
          duration="3 months"
          rating="4.5"
          progress={100}
        />

        <LearningCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgq3ySvdsfVDPeTC_Ep4mrnpifaii2-PQtRQ&s"
          title="CSS Advanced"
          author="Jane Doe"
          category="Tech"
          duration="3 months"
          rating="4.5"
          progress={100}
        />
      </Link>
    </div>
  );
}
