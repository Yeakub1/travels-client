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
      <div className="  flex justify-center  items-center h-full">
        <Loading />
      </div>
    );
  }

  console.log(data?.data?.role, "dddddddddddddddddddddddddddddddddddd");
  return (
    <div>
      <ul className="menu p-4   w-52 md:w-80 lg:w-80  xl:w-80 2xl:w-80   min-h-full bg-base-200 text-base-content">
        <aside className="py-4 w-full md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <>
              <Link href="/" className="pl-3 mb-4 text-2xl font-semibold ">
                Travel-Buddy
              </Link>
            </>
            {data?.data?.role === "User" && (
              <>
                <Link
                  href="/dashboard/createTrip"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Create Trip
                </Link>
                <Link
                  href="/dashboard/travel/travelRequestHistory"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  {" "}
                  Travel Request History
                </Link>
                <Link
                  href="/dashboard/travel/travelPosts"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Travel Posts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold hover:text-indigo-900 hover:border rounded-full"
                >
                  Profile
                </Link>
              </>
            )}

            {data?.data?.role === "Admin" && (
              <>
                <Link
                  href="/dashboard/admin/manageTravelPosts"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Manage Travel Posts
                </Link>
                <Link
                  href="/dashboard/admin/manageUserAccounts"
                  className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full"
                >
                  Manage User Accounts
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-3 py-2.5 font-bold hover:text-indigo-900 hover:border rounded-full"
                >
                  Profile
                </Link>
              </>
            )}
          </div>
          <div className="  flex items-center px-10  pt-40 font-semibold hover:text-indigo-900 hover:border hover:rounded-full">
            <LoginAndLogout />
          </div>
        </aside>
      </ul>
    </div>
  );
};

export default SidebarAllLinks;
