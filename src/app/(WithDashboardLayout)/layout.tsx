import DashBoardLayout from "@/component/Dashboard/DashBoardLayout";
import SideBar from "@/component/SideBar/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashBoardLayout>
        <SideBar>{children}</SideBar>
      </DashBoardLayout>
    </>
  );
};

export default DashboardLayout;
