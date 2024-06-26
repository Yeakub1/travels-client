"use client";

import Link from "next/link";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import Headroom from "react-headroom";
import NavbarImage from "./NavbarImage";
import NavbarList from "./NavbarList";
import NavbarListForSmallDevice from "./NavbarListForSmallDevice";

const Navbar = () => {
  return (
    <Headroom>
      <nav className="bg-[#09867E] text-gray-100 ">
        <div className="navbar p-0 max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <NavbarListForSmallDevice />
            </div>
            <Link href="/" className="font-semibold text-xl">
              Travel Buddy
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <NavbarList />
          </div>
          <div className="navbar-end gap-10 ">
            <section className="avatar">
              <div className="w-12 h-12 rounded-full">
                <Link href="/dashboard/profile">
                  <NavbarImage />
                </Link>
              </div>
            </section>
            <section className="hidden md:inline ">
              <LoginAndLogout />
            </section>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
