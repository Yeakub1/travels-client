"use client";

import { useGetProfileQuery } from "@/Redux/api/profile/profileApi";
import { getUserInfo } from "@/Services/Action/auth.services";

const NavbarImage = () => {
  const token = getUserInfo();
  const { data, isLoading } = useGetProfileQuery("");

  if (isLoading) {
    return "";
  }

  console.log();

  return (
    <div>
      {token && (
        <div>{data?.data?.photo && <img src={data?.data?.photo} />}</div>
      )}
    </div>
  );
};

export default NavbarImage;
