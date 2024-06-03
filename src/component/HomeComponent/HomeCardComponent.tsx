"use client";

import React from "react";
import TripCard from "../Trip/TripCard";
import { useAppSelector } from "@/Redux/hooks";
import LinkButton from "../Button/LinkButton";

const HomeCardComponent = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);
  return (
    <div>
      <div className="grid md:gap-10 lg:gap-0 xl:gap-0 2xl:gap-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4">
        {tripData?.data?.slice(0, 10)?.map((a: any) => (
          <TripCard key={a?.id} data={a} />
        ))}
      </div>

      {tripData?.data?.length > 0 && (
        <div className=" text-center my-10">
          <LinkButton link={"/trip"} title={"See More"} />
        </div>
      )}
    </div>
  );
};

export default HomeCardComponent;
