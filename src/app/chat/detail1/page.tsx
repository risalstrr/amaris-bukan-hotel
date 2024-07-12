/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaCheck,
  FaComment,
  FaEllipsisH,
  FaThumbsUp,
  FaShare,
  FaArrowLeft,
} from "react-icons/fa";
import { Button } from "flowbite-react";
import Link from "next/link";

const Profile = () => (
  <div className="max-w-md mx-auto p-2">
    <Link href={"/chat/detail"}>
      <div className="flex items-center mb-4">
        <FaArrowLeft className="mr-2 cursor-pointer" />
        <span className="text-md font-bold">Back</span>
      </div>
    </Link>
    <div className="relative mb-4">
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg"
        alt="Cover"
        className="w-full h-32 object-cover rounded-t-xl"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
        alt="Profile"
        className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-10"
      />
    </div>
    <div className="text-center mt-10">
      <h1 className="text-xl font-bold">Sylas</h1>
      <p className="text-gray-600">
        Aspiring director. Talk to me about anything.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <Button className="flex justify-center items-center gap-2 space-x-2 bg-gray-200 text-black">
          <FaCheck />
          <span>Following</span>
        </Button>
        <Button className="flex justify-center items-center gap-2 space-x-2 bg-blue-600 text-white">
          <FaComment />
          <span>Message</span>
        </Button>
        <Button className="flex justify-center items-center gap-2 space-x-2 bg-gray-200 text-black">
          <FaEllipsisH />
        </Button>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-lg font-bold mb-4">Activities</h2>
      <div className="bg-white p-4 rounded-xl shadow-md mb-4">
        <div className="flex items-center mb-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
            alt="Sylas"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h3 className="font-bold">Sylas</h3>
            <p className="text-xs text-gray-500">Mar 25, 2024</p>
          </div>
        </div>
        <p>
          Against all odds, I rebuilt my life post-incarceration, becoming a
          thriving business owner and community leader.
        </p>
        <div className="flex items-center mt-2 text-gray-500 text-sm">
          <FaThumbsUp className="mr-1" />
          <span>20</span>
          <FaComment className="ml-4 mr-1" />
          <span>3</span>
          <FaShare className="ml-4 mr-1" />
          <span>1</span>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
