"use client";

import { useCreateTravelBuddyRequestMutation } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";

import Loading from "@/component/Loading/Loading";
import TripRequestForm from "@/component/Trip/TripRequestForm";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

import React from "react";
import { toast } from "sonner";

const TravelRequest = ({ params }: any) => {
  const { id } = params;

  const [addFunction]: any = useCreateTravelBuddyRequestMutation();
  const { data, isLoading, error }: any = useGetProfileQuery("");

  if (isLoading) {
    return (
      <div className="  h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  console.log(error, "dd");

  const handler = async (e: any) => {
    e.preventDefault();

    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const number = e?.target?.number?.value;
    const country = e?.target?.country?.value;
    const city = e?.target?.city?.value;

    const info = {
      name,
      email,
      number,
      country,
      city,
      tripId: id,
      userId: data?.data?.id,
    };
    try {
      const res = await addFunction(info);
      console.log(res, "res");

      if (res?.data?.success === true) {
        toast.success(res.data.message);
      }
      if (res?.error?.data?.success === false) {
        toast.success(res?.error?.data?.message);
      }
      if (res?.error?.data?.message === "Your id is blocked") {
        isBlockHelper(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      {" "}
      <TripRequestForm
        email={data?.data?.email}
        name={data?.data?.name}
        handler={handler}
      />
    </div>
  );
};

export default TravelRequest;
