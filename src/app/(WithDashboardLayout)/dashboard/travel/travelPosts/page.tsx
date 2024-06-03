"use client";
import { useGetPostedTripQuery } from "@/Redux/api/Trip/tripApi";
import Container from "@/component/Container/Container";
import Loading from "@/component/Loading/Loading";
import TravelPostCard from "@/component/Trip/TravelPostCard";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

const TravelPosts = () => {
  const { data, isLoading, refetch, error }: any = useGetPostedTripQuery("", {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
 
  if (isLoading) {
    return <Loading />;
  }
  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  return (
    <Container>
      {data?.data?.length > 0 ? (
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          {data?.data?.map((a: any) => (
            <TravelPostCard key={a?.id} data={a} refetch={refetch} />
          ))}
        </div>
      ) : (
        <p>no data</p>
      )}
    </Container>
  );
};

export default TravelPosts;
