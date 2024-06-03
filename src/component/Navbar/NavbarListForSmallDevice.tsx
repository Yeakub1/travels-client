"use client";
import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { getUserInfo } from "@/Services/Action/auth.services";

const NavbarListForSmallDevice = () => {
  const token = getUserInfo();
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm  bg-gray-900 dropdown-content mt-3 z-50 p-2 shadow rounded-box w-52"
    >
      <li>
        <Link
          href="/"
          className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-gray-500 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          aria-current="page"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/trip"
          className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-gray-500 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Trip
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 hover:text-gray-500 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          About Us
        </Link>
      </li>
      {token && (
        <li>
          <Link
            href="/dashboard/profile"
            className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-gray-500 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            My Profile
          </Link>
        </li>
      )}

      <li className=" md:hidden">
        {" "}
        <LoginAndLogout />
      </li>
    </ul>
  );
};

export default NavbarListForSmallDevice;
