/* eslint-disable @next/next/no-img-element */
import { FaArrowLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const BatchDetails = () => {
  return (
    <div className="min-h-screen p-2">
      <Link href={"/programs"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>

      <div className="overflow-hidden">
        <img
          src="https://pelitariau.com/assets/berita/90853829097-img-20231009-wa0029.jpg"
          alt="Sunset in the mountains"
          className="w-full h-full fill bg-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">Renewed Life</h2>
          <p className="text-gray-500">Urban Recovery Center</p>
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="ml-2 text-gray-700">4.5</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
            Join
          </button>
          <h3 className="mt-6 text-lg font-semibold">About</h3>
          <p className="text-gray-600 mt-2">
            Renewed Life offers a structured rehabilitation program in an urban
            setting, combining modern therapy techniques with practical life
            skills training. The goal is to help individuals integrate smoothly
            back into society.
          </p>
          <h3 className="mt-6 text-xl font-bold">Past Batch Reviews</h3>
          <div className="mt-4 flex items-start">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt="Reviewer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Jinny Oslin</p>
              <p className="text-gray-500 text-sm">Three days ago</p>
              <div className="flex items-center text-yellow-500 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-gray-600 mt-2">
                The life skills workshops were very practical and useful. I feel
                more prepared for the challenges ahead.
              </p>
            </div>
            <div>
              <p className="font-bold">David Lee</p>
              <p className="text-gray-500 text-sm">Two weeks ago</p>
              <div className="flex items-center text-yellow-500 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-gray-600 mt-2">
                Great program in the city. The therapy sessions were very
                effective, and the staff was always there to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
