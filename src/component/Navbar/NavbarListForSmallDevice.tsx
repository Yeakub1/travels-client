"use client";
import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { getUserInfo } from "@/Services/Action/auth.services";

const NavbarListForSmallDevice = () => {
  const token = getUserInfo();
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm bg-[#09867E] dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52"
    >
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

      <li className=" md:hidden">
        <LoginAndLogout />
      </li>
    </ul>
  );
};

export default NavbarListForSmallDevice;
