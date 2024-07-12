"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { UserButton, auth, currentUser } from "@clerk/nextjs";

import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaCalendar } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 bg-white flex flex-row w-full justify-around items-center py-3">
      <Link
        href={"/home"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <FaHome
          size={30}
          color={
            pathname === "/home" || pathname === "/home/detail"
              ? "#004bad"
              : "#3E3C3C"
          }
        />
        <div className="text-[12px] pt-2">Home</div>
      </Link>
      <Link
        href={"/programs"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <FaCalendar
          size={30}
          color={pathname === "/programs" ? "#004bad" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Programs</div>
      </Link>
      <Link
        href={"/courses"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <IoIosBookmarks
          size={30}
          color={pathname === "/courses" ? "#004bad" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Courses</div>
      </Link>

      <Link
        href={"/career"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <PiBuildingOfficeFill
          size={30}
          color={pathname === "/career" ? "#004bad" : "#3E3C3C"}
        />
        <div className="text-[12px] pt-2">Career</div>
      </Link>
      <Link
        href={"/community"}
        className="flex flex-col justify-center items-center hover:scale-[1.05] active:scale-[0.95] transition-all"
      >
        <FaPeopleGroup
          size={30}
          color={
            pathname === "/community" || pathname === "/chat"
              ? "#004bad"
              : "#3E3C3C"
          }
        />
        <div className="text-[12px] pt-2">Community</div>
      </Link>
    </div>
  );
};

export default MobileNavbar;
