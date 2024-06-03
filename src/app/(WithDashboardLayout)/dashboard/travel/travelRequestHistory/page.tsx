"use client";

import { useGetTravelBuddyRequestQuery } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import NotFound from "@/component/NotFound/NotFound";
import Table from "@/component/Table/Table";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

import React from "react";

const TravelRequestHistory = () => {
  type Trip = {
    destination: string;
    startDate: string;
    endDate: string;
    location: string;
    travelType: string;
  };

  type TravelBuddyRequest = {
    id: string;
    userId: string;
    status: string;
    trip: Trip;
  };

  const headers = [
    "Destination",
    "Status",
    "Start Date",
    "End Date",
    "location",
    "Travel Type",
  ];

  const { data, isLoading, error }: any = useGetTravelBuddyRequestQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  console.log(data?.data, "d");
  return (
    <Container>
      {data?.data?.length > 0 ? (
        <Table
          data={data?.data}
          headers={headers}
          condition={"travelRequestHistory"}
        />
      ) : (
        <NotFound
          title={""}
          semiTitle=" Data is not available."
          paragraph=" Sorry, we can't find that data. "
          button={false}
        />
      )}
    </Container>
  );
};

export default TravelRequestHistory;
