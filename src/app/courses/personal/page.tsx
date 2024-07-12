/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import Image from "next/image";
import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

export default function page() {
  return (
    <div className="p-4">
      <Link href={"/courses"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>

      <h1 className="text-2xl font-bold">Personal Skills</h1>
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
      {/* === */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
        <img
          className="w-full h-3/4"
          src="https://pelitariau.com/assets/berita/90853829097-img-20231009-wa0029.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <p className="text-blue-600 text-base">Misa Lestari</p>
          <div className="font-bold text-xl mb-2">Personal Finance </div>
        </div>
        <div className="px-6 pb-2">
          <span className="inline-block mr-5 text-sm  text-gray-700">
            Money
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Coming soon
          </span>
        </div>
      </div>
    </div>
  );
}
