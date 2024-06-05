"use client";

import TripCard from "../Trip/TripCard";
import { useAppSelector } from "@/Redux/hooks";
import LinkButton from "../Button/LinkButton";
import HomeSearching from "./HomeSearching";
import Loading from "../Loading/Loading";

const HomeCardComponent = () => {
  const { tripData, isLoading }: any = useAppSelector((e) => e.trip);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl m-auto my-20">
      <div className="w-1/3 m-auto pb-10">
        <HomeSearching />
      </div>
      <div className="grid md:grid-cols-3 md:gap-5 items-center justify-center">
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
