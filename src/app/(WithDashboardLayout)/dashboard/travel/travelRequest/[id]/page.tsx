"use client";

import { toast } from "sonner";
import { useCreateTravelBuddyRequestMutation } from "@/Redux/api/TravelBuddyRequestApi/travelBuddyRequestApi";
import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import Loading from "@/component/Loading/Loading";
import TripRequestForm from "@/component/Trip/TripRequestForm";
import isBlockHelper from "@/helper/BlockHelper/isBlockHelper";

const TravelRequest = ({ params }: any) => {
  const { id } = params;

  const [addFunction]: any = useCreateTravelBuddyRequestMutation();
  const { data, isLoading, error }: any = useGetProfileQuery("");

  if (isLoading) {
    return <Loading />;
  }

  if (error?.data?.message === "Your id is blocked") {
    isBlockHelper(error?.data?.message);
  }

  const handler = async (e: any) => {
    e.preventDefault();

    const name = e?.target?.name?.value;
    const email = e?.target?.email?.value;
    const number = e?.target?.number?.value;
    const country = e?.target?.country?.value;
    const city = e?.target?.city?.value;

    const info = {
      name,
      email,
      number,
      country,
      city,
      tripId: id,
      userId: data?.data?.id,
    };
    try {
      const res = await addFunction(info);
      if (res?.data?.success === true) {
        toast.success(res.data.message);
      }
      if (res?.error?.data?.success === false) {
        toast.success(res?.error?.data?.message);
      }
      if (res?.error?.data?.message === "Your id is blocked") {
        isBlockHelper(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      {" "}
      <TripRequestForm
        email={data?.data?.email}
        name={data?.data?.name}
        handler={handler}
      />
    </div>
  );
};

export default TravelRequest;
