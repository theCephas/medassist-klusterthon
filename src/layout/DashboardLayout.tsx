import { Outlet } from "react-router-dom";
import Nav from "../components/dashboard-comp/Nav";
import SideNav from "../components/dashboard-comp/SideNav";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideNav />
      <div className="">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
