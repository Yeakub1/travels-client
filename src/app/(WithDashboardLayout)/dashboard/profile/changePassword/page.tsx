"use client";
import { useChangePasswordMutation } from "@/Redux/api/Auth/authApi";
import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePasswordFunction] = useChangePasswordMutation();
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const oldPassword = e?.target?.oldPassword?.value;
    const newPassword = e?.target?.newPassword?.value;
    const confirmPassword = e?.target?.confirmPassword?.value;

    if (newPassword !== confirmPassword) {
      return toast.success(" New password and Confirm password not matching");
    }

    try {
      const data = await changePasswordFunction({
        oldPassword,
        newPassword,
      }).unwrap();

      if (data?.success === true) {
        toast.success(data.message);
        removeFromLocalStorage();
        router.refresh();
      }
      if (data?.success === false) {
        toast.success(data.message);
      }
      if (data?.error?.data?.message === "Your id is blocked") {
        isBlockHelper(data?.error?.data?.message);
      }
    } catch (error: any) {
      console.log(error, "dd");
      toast.success(error?.data?.message);
    }
  };

  return (
    <div className="antialiased bg-slate-200 h-screen flex homeThumbnail-bg-img  items-center">
      <div className=" w-[90%]  md:w-[50%]     lg:w-[50%]  xl:w-[30%]  2xl:w-[30%] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-2xl text-slate-700 font-medium text-center">
          Change password
        </h1>

        <form onSubmit={handleSubmit} className="my-10  ">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium  text-slate-700 pb-2">
                Current password
              </p>
              <input
                name="oldPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter old password"
                required
              />
            </label>
            <label htmlFor="email">
              <p className="font-medium  text-slate-700 pb-2">New Password</p>
              <input
                name="newPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter new password"
                required
              />
            </label>

            <label htmlFor="email">
              <p className="font-medium  text-slate-700 pb-2">
                Confirm Password
              </p>
              <input
                name="confirmPassword"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter confirm password"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 font-medium   text-white bg-gray-900 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                />
              </svg>

              <span>Confirm</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
