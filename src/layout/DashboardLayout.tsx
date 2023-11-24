import { Outlet } from "react-router-dom";
import Nav from "../components/dashboard-comp/Nav";
import SideNav from "../components/dashboard-comp/SideNav";

function DashboardLayout() {
  return (
    <div className="flex justify-between">
      <SideNav />
      <div className="w-3/5 flex-grow">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
