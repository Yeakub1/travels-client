"use client";

import NotFoundPage from "@/app/not-found";
import Container from "../Container/Container";
import Pagination from "../Pagination/Pagination";
import TripCard from "./TripCard";
import { useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedIn } from "@/Services/Action/auth.services";

const AllTrips = () => {
  const { tripData }: any = useAppSelector((e) => e.trip);
 const router = useRouter();

 useEffect(() => {
   if (!isLoggedIn()) {
     router.push("/login");
   }
 }, [router]);
  return (
    <Container>
      <section className="grid md:grid-cols-3 gap-10">
        {tripData?.data?.map((a: any) => (
          <TripCard key={a?.id} data={a} />
        ))}
      </section>
      <section className={`my-10  flex justify-center`}>
        {tripData?.data?.length > 0 ? <Pagination /> : <NotFoundPage />}
      </section>
    </Container>
  );
};

export default AllTrips;
