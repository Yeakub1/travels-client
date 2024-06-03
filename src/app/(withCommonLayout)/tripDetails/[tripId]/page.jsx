"use client";

import DetailCard from "@/component/Trip/DetailCard";
import { useGetSingleTripQuery } from "@/Redux/api/Trip/tripApi";

const tripDetails = ({ params }) => {
  const { data } = useGetSingleTripQuery(params?.tripId);

  return (
    <div className=" login-bg-img ">
      <DetailCard data={data} />
    </div>
  );
};

export default tripDetails;
