"use client";

import Filter from "../Filter/Filter";
import { usePathname } from "next/navigation";
import SidebarAllLinks from "../SideBar/SidebarAllLinks";

const SidebarAllLinksAndFilter = () => {
  const pathname = usePathname();

  return <div>{pathname === "/trip" ? <Filter /> : <SidebarAllLinks />}</div>;
};

export default SidebarAllLinksAndFilter;
