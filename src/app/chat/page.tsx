/* eslint-disable @next/next/no-img-element */
import { Button } from "flowbite-react";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";

const messages = [
  {
    name: "Sylas",
    message: "Yea, I love that TV show. Did you...",
    time: "2 mins ago",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s",
    isOnline: true,
  },
  {
    name: "Debby Anggraini",
    message: "I'm thinking of starting my own res...",
    time: "4 hours ago",
    profileImage: null,
    isOnline: false,
  },
];

const MessageCard = ({ name, message, time, profileImage, isOnline }: any) => (
  <div className="flex items-center">
    <div className="relative">
      {profileImage ? (
        <img src={profileImage} alt={name} className="w-10 h-10 rounded-full" />
      ) : (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg">
          {name.charAt(0)}
        </div>
      )}
      {isOnline && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      )}
    </div>
    <div className="ml-3 flex-1">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{name}</h3>
        <FaArrowRight className="text-gray-400" />
      </div>
      <p className="text-gray-600 text-sm">{message}</p>
      <p className="text-gray-400 text-xs">{time}</p>
    </div>
  </div>
);

const MessagesList = () => (
  <div className="flex flex-col gap-5 max-w-md mx-auto p-5 pt-5">
    <Header />

    <Link href={"/community"}>
      <div className="flex items-center mb-2">
        <FaArrowLeft className="mr-2 cursor-pointer" />
        <span className="text-md font-bold">Back</span>
      </div>
    </Link>
    <h1 className="text-2xl font-bold">Messages</h1>
    <form className="flex items-center w-full max-w-sm mx-auto">
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
          placeholder="Search a specific chat "
          required
        />
      </div>
    </form>

    {messages.map((msg, index) => (
      <>
        <Link href={"/chat/detail"}>
          <MessageCard key={index} {...msg} />
        </Link>
      </>
    ))}

    <div className="fixed bottom-20 right-4">
      <Button className="rounded-full bg-[#004AAD] text-white shadow-lg">
        <IoMdAdd className="text-3xl" />
      </Button>
    </div>
  </div>
);

export default MessagesList;
