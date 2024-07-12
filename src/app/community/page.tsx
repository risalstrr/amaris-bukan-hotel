/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaQuoteRight,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaCommentDots,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { Button } from "flowbite-react";
import Header from "@/components/header";
import { BsChatRightText } from "react-icons/bs";
import Link from "next/link";
import { GiSettingsKnobs } from "react-icons/gi";

const QuoteBox = ({ quote, author }: any) => (
  <div className="p-4 bg-blue-100 rounded-md shadow-md">
    <p className="text-lg italic">{quote}</p>
    <p className="mt-2 text-right font-bold">- {author}</p>
  </div>
);

const PostCard = ({
  author,
  date,
  content,
  image,
  likes,
  comments,
  shares,
}: any) => (
  <div className="p-4 bg-white rounded-md shadow-md my-4">
    <div className="flex items-center mb-2">
      <img
        src="https://via.placeholder.com/40"
        alt={author}
        className="w-10 h-10 rounded-full mr-2"
      />
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
    <p>{content}</p>
    {image && <img src={image} alt="Post" className="mt-2 rounded-md" />}
    <div className="flex items-center mt-2 text-gray-500 text-sm">
      <FaThumbsUp className="mr-1" />
      <span>{likes}</span>
      <FaComment className="ml-4 mr-1" />
      <span>{comments}</span>
      <FaShare className="ml-4 mr-1" />
      <span>{shares}</span>
    </div>
  </div>
);

const App = () => (
  <div className="max-w-md mx-auto p-4 mb-16">
    <Header />

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
          placeholder="Search for people, topics, or keywords"
          required
        />
      </div>
      <GiSettingsKnobs className="w-14" />
    </form>

    <QuoteBox
      quote="It gets easier. Every day it gets a little easier. But you gotta do it every day — that's the hard part. But it does get easier"
      author="Kuda90s"
    />
    <Button className="w-1/2 my-5 bg-[#004AAD]">Submit A Quote</Button>
    <PostCard
      author="Maria"
      date="Mar 25, 2024"
      content="After incarceration, I rebuilt my life, earning a degree and becoming an advocate for criminal justice reform, inspiring many with my story of redemption."
      image="https://st5.depositphotos.com/62628780/64415/i/450/depositphotos_644153394-stock-photo-friends-selfie-low-angle-portrait.jpg"
      likes={20}
      comments={3}
      shares={1}
    />

    <PostCard
      author="John"
      date="Mar 25, 2024"
      content="My resilience and determination transformed my life after incarceration, leading me to become a successful business owner and community leader."
      image="https://img.freepik.com/free-vector/beige-leafy-watercolor-background-vector_53876-136491.jpg"
      likes={20}
      comments={3}
      shares={1}
    />

    <Link href={"/chat"}>
      <div className="fixed bottom-20 right-4">
        <Button className="rounded-full p-2 bg-[#004AAD] text-white shadow-lg">
          <BsChatRightText className="text-2xl" />
        </Button>
      </div>
    </Link>
  </div>
);

export default App;
