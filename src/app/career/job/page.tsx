import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

const JobDetails = () => {
  return (
    <div className="min-h-screen p-4 mb-16 max-w-md mx-auto">
      <Header />

      <Link href={"/career"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="text-lg mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>

      <div className=" overflow-hidden">
        <Image
          src="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/64664e9cd07202af8bcdc5e4_5757453.jpg"
          width={600}
          height={300}
          objectFit="cover"
          alt="Web Developer"
          className="w-full rounded-lg"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">UI/UX Designer</h2>
          <p className="text-gray-500">PT. Design dan Data</p>
          <div className="flex items-center mt-2 text-gray-700">
            <FaMapMarkerAlt className="mr-2" />
            <span>East Jakarta (On-site)</span>
          </div>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
            Apply Now
          </button>
          <h3 className="mt-6 text-xl font-bold">About</h3>
          <p className="text-gray-600 mt-2">
            Design attractive and engaging user interfaces and user experiences.
            <a href="#" className="text-blue-500">
              See more
            </a>
          </p>
          <h3 className="mt-6 text-xl font-bold">Skills</h3>
          <div className="flex flex-wrap mt-2">
            <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full mr-2 mb-2">
              Visual Design
            </span>
            <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full mr-2 mb-2">
              Prototyping
            </span>
            <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full mr-2 mb-2">
              Wireframing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
