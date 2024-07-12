// components/LearningCard.js
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FaStar, FaCalendarAlt } from "react-icons/fa";

const LearningCard = ({
  imageSrc,
  title,
  author,
  category,
  duration,
  rating,
  progress,
}: any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageSrc}
        width={600}
        height={300}
        objectFit="cover"
        alt={title}
        className="w-full"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{author}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-500">{category}</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center text-gray-500">
            <FaCalendarAlt className="mr-1" />
            <span>{duration}</span>
          </div>
          <span className="text-gray-700">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Occupational Skills</h1>
      <div className="flex items-center mb-4">
        <div className="flex bg-white rounded-lg shadow-lg w-full mr-2">
          <FaSearch className="text-gray-500 m-2" />
          <input
            type="text"
            placeholder="Search for a specific course"
            className="w-full p-2 outline-none"
          />
        </div>
        <FaFilter className="text-gray-500 text-2xl cursor-pointer" />
      </div>
      <div className="flex justify-between items-center text-sm mb-4">
        <p>Don&apos;t know what you can offer?</p>
        <Link href={"/quiz"}>
          <div className="bg-[#004AAD] text-white py-1 px-1 rounded-md shadow-md">
            Take Our Quiz
          </div>
        </Link>
      </div>
      <LearningCard
        imageSrc="https://i.ytimg.com/vi/GE2qnXC8UMg/maxresdefault.jpg"
        title="HTML Advanced"
        author="Jane Doe"
        category="Tech"
        duration="3 months"
        rating="4.5"
        progress={100}
      />
    </div>
  );
};

export default HomePage;
