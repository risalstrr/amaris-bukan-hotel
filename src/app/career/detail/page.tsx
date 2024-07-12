/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowLeft, FaBookmark, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "flowbite-react";
import Link from "next/link";

const JobListing = () => (
  <div className="max-w-md mx-auto p-4">
    <Link href={"/career"}>
      <div className="flex items-center mb-4">
        <FaArrowLeft className="text-lg cursor-pointer" />
        <span className="text-md font-bold">Back</span>
      </div>
    </Link>

    <div className="relative mb-4">
      <img
        src="https://s3-cdn.cmlabs.co/page/2023/10/04/web-developer-pengertian-tugas-skill-dan-contohnya-295345.png"
        alt="Job"
        className="w-full h-32 object-cover rounded-t-xl"
      />
    </div>
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Web Developer</h1>
      <FaBookmark className="text-gray-400 cursor-pointer" />
    </div>
    <p className="text-gray-600 text-sm my-2">Indonesia Bebersih</p>
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <FaMapMarkerAlt className="mr-2" />
      <span>Bekasi (Remote)</span>
    </div>
    <Button className="w-full mb-4 bg-blue-600 text-white">Apply Now</Button>
    <div className="mb-4">
      <h2 className="text-lg font-semibold">About</h2>
      <p className="text-gray-600 text-md">
        Cillum laboris sunt nostrud cillum minim amet magna. Non duis voluptate
        elit amet molli...
      </p>
      <span className="text-blue-600 cursor-pointer">See more</span>
    </div>
    <div>
      <h2 className="text-lg font-semibold mb-2">Skills</h2>
      <div className="flex space-x-2">
        <span className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full">
          Python
        </span>
        <span className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full">
          Docker
        </span>
        <span className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded-full">
          AWS
        </span>
      </div>
    </div>
  </div>
);

export default JobListing;
