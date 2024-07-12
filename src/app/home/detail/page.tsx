"use client";
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import Header from "@/components/header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("19");
  const [selectedView, setSelectedView] = useState("Daily");

  const events = [
    {
      time: "09:00 AM",
      description: "Make progress on Web Development course",
      status: "completed",
    },
    {
      time: "01:30 PM",
      description: "Attend meet with Dr. Sheila",
      status: "pending",
    },
  ];

  return (
    <>
      <Header />
      <Link href={"/home"}>
        <div className="flex items-center mb-4 m-3">
          <FaArrowLeft className="mr-2 cursor-pointer" />
          <span className="text-md font-semibold">Back</span>
        </div>
      </Link>
      <div className="max-w-md mx-auto pt-2 p-4">
        <div className="flex justify-end mb-4">
          <Dropdown
            label={selectedView}
            color="light"
            pill={true}
            className="w-1/2"
          >
            <Dropdown.Item onClick={() => setSelectedView("Daily")}>
              Daily
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedView("Weekly")}>
              Weekly
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedView("Monthly")}>
              Monthly
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="grid grid-cols-5 gap-2 mb-4 text-center">
          {["17", "18", "19", "20", "21"].map((day: any) => (
            <div
              key={day}
              className={`p-2 rounded-lg cursor-pointer ${
                selectedDate === day
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              <p className="font-bold">{day}</p>
              <p className="text-xs">
                {["Mon", "Tue", "Wed", "Thu", "Fri"][day - 17]}
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mb-4 text-sm">
          Click on event to see more details
        </p>
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white p-4 rounded-lg mb-2 flex justify-between items-center cursor-pointer"
          >
            <div>
              <p className="font-bold">{event.time}</p>
              <p>{event.description}</p>
            </div>
            <div
              className={`w-4 h-4 rounded-full ${
                event.status === "completed" ? "bg-green-500" : "bg-white"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
