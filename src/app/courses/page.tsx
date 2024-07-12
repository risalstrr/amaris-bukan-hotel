/* eslint-disable @next/next/no-img-element */
"use client";

import Header from "@/components/header";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const LearningCard = ({ imageSrc, title, author, progress }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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

interface Interest {
  value: string;
  label: string;
}

const interests: Interest[] = [
  { value: "arts", label: "🎨 Arts" },
  { value: "sport", label: "🏀 Sport" },
  { value: "climbing", label: "🧗 Climbing" },
  { value: "cooking", label: "🍲 Cooking" },
  { value: "craft", label: "🏀 Craft" },
  { value: "camping", label: "🏕️ Camping" },
  { value: "makeup", label: "💄 Make-up" },
  { value: "working", label: "🧑‍💼 Working" },
  { value: "fashion", label: "🧥 Fashion" },
  { value: "animals", label: "🐞 Animals" },
  { value: "luxury", label: "💎 Luxury" },
  { value: "meditation", label: "🧘 Meditation" },
  { value: "shopping", label: "🛍️ Shopping" },
  { value: "sing", label: "🎤 Sing" },
  { value: "music", label: "🎵 Music" },
  { value: "game", label: "🎮 Game" },
  { value: "investment", label: "📊 Investment" },
  { value: "drawing", label: "✏️ Drawing" },
];

const CoursesPage = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleToggle = (interest: string) => {
    setSelectedInterests((prevSelected) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((i) => i !== interest)
        : [...prevSelected, interest]
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto max-w-md min-h-screen overflow-hidden p-4">
        <h1 className="font-extrabold text-xl">
          What do you want to upgrade today?
        </h1>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-md text-gray-600 font-bold">
              Continue Learning
            </h1>
            <Link href="/courses/video">
              <p className="text-blue-500 underline text-sm">View All</p>
            </Link>
          </div>
          <Link href="/courses/video">
            <LearningCard
              imageSrc="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62a030850a538782b1755eeb_coding%203.jpg"
              title="Web Development"
              author="David Ghana"
              progress={100}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h1 className="text-md text-gray-600 font-bold">
            Browse Our Selection
          </h1>
          <Link href={"/courses/occupational"}>
            <div className="relative w-full h-20 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://factorialhr.co.uk/wp-content/uploads/2020/09/16173210/laws-on-working-from-home.png"
                alt="Sunset in the mountains"
                className="w-full h-full fill bg-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">
                  Occupational Skills
                </h2>
              </div>
            </div>
          </Link>

          <Link href={"/courses/personal"}>
            <div className="relative w-full h-20 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://t3.ftcdn.net/jpg/02/67/25/64/360_F_267256449_9zyyZVvLDI2CiNeuMAmMWGwDUXU9ZehZ.jpg"
                alt="Sunset in the mountains"
                className="w-full h-full fill bg-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">
                  Personal Skills
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
