import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "flowbite-react";
import Link from "next/link";

const AptitudeTest = () => (
  <div className="max-w-md mx-auto p-4">
    <Link href={"/courses/occupational"}>
      <div className="flex items-center mb-4">
        <FaArrowLeft className="mr-2 cursor-pointer" />
        <span className="text-md font-bold">Back</span>
      </div>
    </Link>
    <h1 className="text-2xl font-bold mb-4">Aptitude and Interest Test</h1>
    <p className="text-gray-600 mb-4 text-md">
      Take our test to find out what you&apos;re good at and what you&apos;re
      interested in. The test can be a bit lengthy, but if you&apos;re looking
      for somewhere to start, we promise it&apos;s{" "}
      <span className="font-bold">worth it</span>.
    </p>
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">The Test Includes:</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-2">What You Will Gain:</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
    <Button className="w-full bg-blue-600 text-white">Take the Test</Button>
  </div>
);

export default AptitudeTest;
