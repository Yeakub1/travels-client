"use client";

import React from "react";
import SidebarAllLinks from "../SideBar/SidebarAllLinks";
import Filter from "../Filter/Filter";
import { usePathname } from "next/navigation";

const SidebarAllLinksAndFilter = () => {
  const pathname = usePathname();

  console.log(pathname);
  return <div>{pathname === "/trip" ? <Filter /> : <SidebarAllLinks />}</div>;
};

export default SidebarAllLinksAndFilter;
