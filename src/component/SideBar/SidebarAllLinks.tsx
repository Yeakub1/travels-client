"use Client";
import Link from "next/link";
import React from "react";
import LoginAndLogout from "../LoginAndLogout/LoginAndLogout";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import Loading from "../Loading/Loading";

const SidebarAllLinks = () => {
  const { data, isLoading } = useGetProfileQuery("");

  if (isLoading) {
    return (
        <Loading />
    );
  }

  return (
    <div>
      <ul className="menu  w-72 bg-[#09867E] text-white">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm">
            <>
              <Link href="/" className="pl-3 mb-4 text-2xl font-semibold ">
                Travel-Buddy
              </Link>
            </>
            {data?.data?.role === "User" && (
              <>
                <Link
                  href="/dashboard/createTrip"
                  className="flex items-center px-3 py-2.5 font-semibold"
                >
                  Create Trip
                </Link>
                <Link
                  href="/dashboard/travel/travelRequestHistory"
                  className="flex items-center px-3 py-2.5 font-semibold"
                >
                  {" "}
                  Travel Request History
                </Link>
                <Link
                  href="/dashboard/travel/travelPosts"
                  className="flex items-center px-3 py-2.5 font-semibold"
                >
                  Travel Posts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold"
                >
                  Profile
                </Link>
              </>
            )}

            {data?.data?.role === "Admin" && (
              <>
                <Link
                  href="/dashboard/admin/manageTravelPosts"
                  className="flex items-center px-3 py-2.5 font-semibold"
                >
                  Manage Travel Posts
                </Link>
                <Link
                  href="/dashboard/admin/manageUserAccounts"
                  className="flex items-center px-3 py-2.5 font-semibold"
                >
                  Manage User Accounts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold"
                >
                  Profile
                </Link>
              </>
            )}
          </div>
          <div className="text-center pt-96  ">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
