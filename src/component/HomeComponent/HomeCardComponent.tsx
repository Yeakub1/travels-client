"use client";

import TripCard from "../Trip/TripCard";
import { useAppSelector } from "@/Redux/hooks";
import LinkButton from "../Button/LinkButton";

const HomeCardComponent = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);
  return (
    <div>
      <div className="grid md:gap-10 md:grid-cols-2">
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
