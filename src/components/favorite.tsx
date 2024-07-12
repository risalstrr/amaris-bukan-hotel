import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { currentUser } from "@clerk/nextjs";
import { useState } from "react";

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

export default async function FavoriteModule() {
  const user = await currentUser();

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleToggle = (interest: string) => {
    setSelectedInterests((prevSelected: any) =>
      prevSelected.includes(interest)
        ? prevSelected.filter((i: any) => i !== interest)
        : [...prevSelected, interest]
    );
  };

  return (
    <>
      <div className="flex flex-col w-full min-h-screen p-5">
        <h1 className="font-extrabold text-xl">
          What are some things you enjoy?
        </h1>
        <p className="text-sm mt-3 text-gray-500">
          We&apos;ll tailor an experience based on your interests, creating a
          personalized journey
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <button
            key={interest.value}
            onClick={() => handleToggle(interest.value)}
            className={classNames(
              "px-4 py-2 rounded-full border transition-colors duration-200",
              {
                "bg-blue-600 text-white": selectedInterests.includes(
                  interest.value
                ),
                "bg-white text-black border-gray-300":
                  !selectedInterests.includes(interest.value),
              }
            )}
          >
            {interest.label}
          </button>
        ))}
      </div>
    </>
  );
}
