/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaSmile,
  FaPaperPlane,
  FaArrowLeft,
} from "react-icons/fa";

const messages = [
  {
    name: "Sylas",
    message:
      "Yea, I loved that TV Show. Did you see that Bojack Horseman quote someone submitted to the Community today? Kuda90s....",
    time: "2 mins ago",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s",
    isOnline: true,
  },
];

const ChatMessage = ({
  name,
  message,
  time,
  profileImage,
  isOnline,
  isSender,
}: any) => (
  <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
    {!isSender && (
      <img
        src={profileImage}
        alt={name}
        className="w-10 h-10 rounded-full mr-2"
      />
    )}
    <div className={`flex flex-col ${isSender ? "items-end" : "items-start"}`}>
      <div
        className={`p-3 rounded-lg shadow-md ${
          isSender ? "bg-gray-200" : "bg-blue-100"
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
      <span className="text-xs text-gray-400 mt-1">{time}</span>
    </div>
    {isSender && (
      <img
        src={profileImage}
        alt={name}
        className="w-10 h-10 rounded-full ml-2"
      />
    )}
  </div>
);

const Chat = () => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    // Handle sending message logic
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto p-4 flex flex-col h-full">
      <Link href={"/chat"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className="flex items-center mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
          alt="Sylas"
          className="w-12 h-12 rounded-full"
        />
        <Link href="/chat/detail1">
          <div className="ml-3">
            <h2 className="text-lg font-bold">Sylas</h2>
            <span className="text-green-500 text-sm">Online</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ChatMessage
          name="Sylas"
          message="Hey, have you watched the latest season of..."
          time="Just now"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
          isSender={true}
        />
        <ChatMessage
          name="Sylas"
          message="Stranger Things?"
          time="Just now"
          profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
          isSender={true}
        />
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} isSender={false} />
        ))}
      </div>
      <div className="fixed items-center bottom-0 w-full border-t p-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 p-2 rounded-full border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="ml-2 p-2" onClick={handleSendMessage}>
          <FaPaperPlane className="text-blue-600 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
