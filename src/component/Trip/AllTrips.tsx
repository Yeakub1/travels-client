"use client";

import NotFoundPage from "@/app/not-found";
import Container from "../Container/Container";

import Pagination from "../Pagination/Pagination";
import TripCard from "./TripCard";
import { useAppSelector } from "@/Redux/hooks";

const AllTrips = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);

  console.log(tripData?.data, "trip");

  return (
    <Container>
      <section className=" grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
        {tripData?.data?.map((a: any) => (
          <TripCard key={a?.id} data={a} />
        ))}
      </section>
      <section className={` my-20  flex justify-center`}>
        {tripData?.data?.length > 0 ? <Pagination /> : <NotFoundPage />}
      </section>
    </Container>
  );
};

export default AllTrips;
