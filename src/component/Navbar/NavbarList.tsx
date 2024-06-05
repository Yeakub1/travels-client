"use client";

import { getUserInfo } from "@/Services/Action/auth.services";
import Link from "next/link";

const NavbarList = () => {
  const token = getUserInfo();
  return (
    <ul className="flex flex-col font-medium p-4 md:space-x-8 rtl:space-x-reverse md:flex-row ">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/trip">Trip</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      {token && (
        <li>
          <Link href="/dashboard/profile">My Profile</Link>
        </li>
      )}
    </ul>
  );
};

export default NavbarList;
