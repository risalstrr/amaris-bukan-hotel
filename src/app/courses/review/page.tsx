/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseDetails = ({
  imageSrc,
  title,
  author,
  rating,
  progress,
  about,
  reviews,
}: any) => {
  return (
    <div className="min-h-screen">
      <Link href={"/courses"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          width={600}
          height={300}
          objectFit="cover"
          alt={title}
          className="w-full rounded-lg"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500">{author}</p>
          <div className="flex items-center mt-2 text-gray-700">
            <div className="flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="ml-2">{rating}</span>
          </div>
          <Link href={"/courses/video"}>
            <button className="mt-4 bg-blue-600 text-white p-2 rounded-md shadow-md">
              Continue Learning
            </button>
          </Link>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-gray-700">{progress}%</span>
          </div>
          <h3 className="mt-6 text-xl font-bold">About</h3>
          <p className="text-gray-600 mt-2">
            {about}
            <a href="#" className="text-blue-500">
              See more
            </a>
          </p>
          <h3 className="mt-6 text-xl font-bold">What Others Say</h3>
          {reviews.map((review: any, index: any) => (
            <div key={index} className="mt-4 flex items-start">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.time}</p>
                <div className="flex items-center text-yellow-500 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <p className="text-gray-600 mt-2">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const reviews = [
    {
      name: "Jinny Oslin",
      time: "A day ago",
      avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/009/749/643/small_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg",
      text: "Magna id sint irure in cillum esse nisi dolor laboris ullamco. Magna id sint irure in cillum esse nisi dolor laboris ullamco...",
    },
  ];

  return (
    <div className="p-4">
      <CourseDetails
        imageSrc="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62a030850a538782b1755eeb_coding%203.jpg"
        title="Web Development"
        author="Risa Lestari"
        rating="4.5"
        progress={100}
        about="Cillum laboris sunt nostrud cillum minim amet magna. Non duis voluptate elit amet molli..."
        reviews={reviews}
      />
    </div>
  );
};

export default HomePage;
