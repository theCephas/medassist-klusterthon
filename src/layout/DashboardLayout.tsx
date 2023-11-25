import { Outlet } from "react-router-dom";
import Nav from "../components/dashboard-comp/Nav";
import SideNav from "../components/dashboard-comp/SideNav";

// import AddDependant from "../components/dashboard-comp/AddDependant";

function DashboardLayout() {
  return (
    <div className="flex justify-between">
      <SideNav />
      <div className="w-3/5 flex-grow">
        <Nav />
        <Outlet />
      </div>
      {/* <AddDependant /> */}
    </div>
  );
}

export default DashboardLayout;
