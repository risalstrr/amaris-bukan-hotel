// components/CourseDetails.js
import Image from "next/image";
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaCircle } from "react-icons/fa";
import Link from "next/link";

const CourseDetails = ({
  imageSrc,
  title,
  author,
  rating,
  progress,
  lessons,
}: any) => {
  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <Link href={"/courses/review"}>
        <div className="flex items-center mb-4">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-bold">Back</span>
        </div>
      </Link>
      <div className=" overflow-hidden">
        <Image
          src={imageSrc}
          width={600}
          height={300}
          objectFit="cover"
          alt={title}
          className="w-full"
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
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-gray-700">{progress}%</span>
          </div>
          <div className="mt-6">
            <div className="flex border-b">
              <button className="pb-2 mr-4 text-blue-600 border-b-2 border-blue-600">
                Lessons
              </button>
              <Link href={"/courses/grades"}>
                <button className="pb-2 mr-4 text-gray-600">Grades</button>
              </Link>
              <Link href={"/courses/flashcard"}>
                <button className="pb-2 text-gray-600">Flashcards</button>
              </Link>
            </div>
            <Link href={"/courses/lesson"}>
              <div className="mt-4">
                {lessons.map((lesson: any, index: any) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4"
                  >
                    <span>{lesson}</span>
                    <FaCircle className="text-blue-600" />
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const lessons = [
    "Lesson 1: Setting Up",
    "Lesson 2: Frontend",
    "Lesson 3: Backend",
    "Lesson 4: Putting It All Together",
    "Lesson 5: Deployment",
  ];

  return (
    <CourseDetails
      imageSrc="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/62a030850a538782b1755eeb_coding%203.jpg"
      title="Web Development"
      author="Risa Lestari"
      rating="4.5"
      progress={100}
      lessons={lessons}
    />
  );
};

export default HomePage;
