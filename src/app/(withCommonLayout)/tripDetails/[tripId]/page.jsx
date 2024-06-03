"use client";

import { useGetSingleTripQuery } from "@/Redux/api/Trip/tripApi";
import DetailCard from "@/component/Trip/DetailCard";
import React from "react";

const tripDetails = ({ params }) => {
  const { data } = useGetSingleTripQuery(params?.tripId);

  console.log(data, "p");

  return (
    <div className=" login-bg-img ">
      <DetailCard data={data} />
    </div>
  );
};

export default tripDetails;
