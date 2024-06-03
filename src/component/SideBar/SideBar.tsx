import SidebarAllLinksAndFilter from "../SidebarAllLinksAndFilter/SidebarAllLinksAndFilter";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <div>{children}</div>{" "}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <SidebarAllLinksAndFilter />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
