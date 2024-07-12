/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import { Button } from "flowbite-react";
import Header from "@/components/header";
import { GiSettingsKnobs } from "react-icons/gi";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import Image from "next/image";

const FeatureCard = ({ imageSrc, icon, title }: any) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={imageSrc}
        width={600}
        height={200}
        objectFit="cover"
        alt={title}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center p-4">
        <div className="flex items-center space-x-4">
          {icon}
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ title, company, location, image, remote }: any) => (
  <div className="flex items-center p-3 border-[1px] shadow-md rounded-md">
    <img src={image} alt={title} className="w-16 h-16 rounded-md" />
    <div className="ml-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{company}</p>
      <div className="flex items-center text-sm text-gray-500">
        <FaMapMarkerAlt className="mr-1" />
        <span>{location}</span>
        {remote && <span className="ml-2">(Remote)</span>}
      </div>
    </div>
    <FaBookmark className="ml-auto text-gray-400" />
  </div>
);

const JobList = () => {
  const jobs = [
    {
      title: "Restaurant Cook",
      company: "Lapar.id",
      location: "West Jakarta (On-site)",
      image:
        "https://cleaningocm.co.id/wp-content/uploads/2023/07/Cleaning-Service-OCM-Malang-1.jpg",
      remote: false,
    },
    {
      title: "Cleaning Service",
      company: "Indonesia Bebersih",
      location: "Bekasi (On-site)",
      image:
        "https://cleaningocm.co.id/wp-content/uploads/2023/07/Cleaning-Service-OCM-Malang-1.jpg",
      remote: false,
    },
    {
      title: "Web Developer",
      company: "Indonesia Bebersih",
      location: "Bekasi",
      image:
        "https://cleaningocm.co.id/wp-content/uploads/2023/07/Cleaning-Service-OCM-Malang-1.jpg",
      remote: true,
    },
  ];

  return (
    <div className="max-w-md mx-auto mb-20 rounded-xl overflow-hidden md:max-w-2xl p-4">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Search branch name..."
            required
          />
        </div>
        <GiSettingsKnobs className="w-14" />
      </form>

      <h1 className="text-lg text-gray-600 mt-3 font-semibold">
        Boost Your Chances
      </h1>

      <FeatureCard
        imageSrc="https://5.imimg.com/data5/AS/FG/GLADMIN-27549754/resume-builder.jpg"
        icon={<FaBrain className="text-white text-4xl" />}
        title="AI-Powered Resume Builder"
      />

      <h1 className="text-lg text-gray-600 font-semibold mt-6">
        Job Listings We Think You&apos;ll Like
      </h1>
      <div className="flex flex-col gap-5">
        <Button className="w-3/4 bg-[#004AAD] mb-2 mt-4">
          View My Saved Jobs
        </Button>
        <Link href="/career/job">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default JobList;
