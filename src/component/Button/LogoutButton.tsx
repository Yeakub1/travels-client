"use client";

import { removeFromLocalStorage } from "@/Services/Action/auth.services";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handler = () => {
    removeFromLocalStorage();
    router.refresh();
  };
  return (
    <button
      onClick={handler}
      className="bg-red-500 hover:bg-[#09867E] btn text-white"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
