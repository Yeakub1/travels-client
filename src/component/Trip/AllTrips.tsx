"use client";

import Pagination from "../Pagination/Pagination";
import TripCard from "./TripCard";
import { useAppSelector } from "@/Redux/hooks";
import Loading from "../Loading/Loading";

const AllTrips = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);

  return (
    <div className="max-w-5xl m-auto"> 
      <section className="grid md:grid-cols-3 gap-10 mt-10">
        {tripData?.data?.map((a: any) => (
          <TripCard key={a?.id} data={a} />
        ))}
      </section>
      <section className={`my-10  flex justify-center`}>
        {tripData?.data?.length > 0 ? <Pagination /> : <Loading />}
      </section>
    </div>
  );
};

export default AllTrips;
