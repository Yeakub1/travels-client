"use client";

import React, { useEffect, useState } from "react";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/Redux/api/profile/profileApi";
import {
  getUserInfo,
  removeFromLocalStorage,
} from "@/Services/Action/auth.services";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";
import multipleImageHelper from "@/helper/imageHelper/multipleImageHelper";
import { jwtDecoratedHelper } from "@/helper/jwtHelper/jwtHelper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Profile = () => {
  const { data, refetch, error }: any = useGetProfileQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  const [updateFunction] = useUpdateProfileMutation();

  const router = useRouter();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState([]);
  const [modal, setModal] = useState(false);

  const [bio, setBio] = useState("");
  console.log(data, "d");

  useEffect(() => {
    setId(data?.data?.id || "");
    setName(data?.data?.name || "");
    setAge(data?.data?.age || "");
    setEmail(data?.data?.email || "");
    setBio(data?.data?.bio || "");
  }, [data]);

  const handler = async (e: any) => {
    e.preventDefault();

    const info = {
      name,
      age,
      bio,
      email,
    };

    try {
      const updateData = await updateFunction(info).unwrap();
      if (updateData && updateData.success === true) {
        toast.success(updateData?.message);
        const token = getUserInfo();
        const { email }: any = jwtDecoratedHelper(token || "");

        if (email !== updateData?.data?.email) {
          console.log(email, updateData?.data?.email);
          removeFromLocalStorage();
          setTimeout(() => {
            router.refresh();
            toast.success("Please login agin ");
          }, 2000);
        }

        console.log(updateData, "l");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data.message);
    }
  };

  const PhotoHandler = async (e: any) => {
    e.preventDefault();
    setModal(false);
    const images = await multipleImageHelper(photo);

    if (images?.length < 1) {
      return toast.error(
        "Image problem. Image not uploaded please try again later."
      );
    }

    try {
      const updateData = await updateFunction({ photo: images[0] }).unwrap();

      if (updateData?.success === true) {
        toast.success(updateData.message);
        refetch();
      }
      if (updateData?.success === false) {
        toast.success(updateData.message);
      }
    } catch (error: any) {
      toast.success(error?.data?.message);
    }
  };
  return (
    <div className="card-body w-full gap-5 px-3 md:px-16 lg:px-28 flex flex-col items-center justify-center ">
      <section className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-center justify-center card-body border-[3px] border-gray-300 shadow-xl rounded-lg">
        <div className=" flex flex-col items-center justify-center  ">
          <div className="w-full sm:max-w-xl sm:rounded-lg  ">
            <div className="grid max-w-2xl mx-auto ">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2"
                  src={data?.data?.photo}
                  alt={data?.data?.name}
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    className="py-3.5 px-7 text-base font-medium text-white bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900"
                    onClick={() => setModal(true)}
                  >
                    Change picture
                  </button>
                  <Link
                    href={"/dashboard/profile/changePassword"}
                    className="py-3.5 px-7 text-base font-medium text-white  bg-gray-500  rounded-lg border  hover:bg-gray-700 "
                  >
                    Change Password
                  </Link>
                </div>
              </div>
              <form
                onSubmit={handler}
                className="items-center mt-8 sm:mt-14 text-[#202142]"
              >
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg w-full p-2.5"
                      placeholder="Your first name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Your age
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg w-full p-2.5"
                      placeholder="Your last name"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white  dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg w-full p-2.5"
                    placeholder="your.email@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-white  dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="message"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg w-full p-2.5"
                    placeholder="Write your bio here..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog className={`${modal ? "block" : "hidden"}   bg-gray-900 p-10`}>
        <div className=" bg-gray-900">
          <div className="bg-gray-900">
            <div className=" ">
              <div className=" flex justify-center">
                <input
                  onChange={(e) => setPhoto(Array.from(e.target.files as any))}
                  type="file"
                  className="file-input w-full max-w-xs my-3  block "
                />
              </div>
              <div className=" flex justify-between mt-10">
                <button
                  onClick={() => setModal(false)}
                  className="btn text-white bg-red-500"
                >
                  Close
                </button>

                <button onClick={PhotoHandler} className="btn ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
