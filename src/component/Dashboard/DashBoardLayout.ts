"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/Services/Action/auth.services";

const DashBoardLayout = ({ children }: any) => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router, children]);

  return children;
};

export default DashBoardLayout;
