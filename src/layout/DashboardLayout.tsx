import { Outlet } from 'react-router-dom';
import Nav from '../components/dashboard-comp/Nav';
import SideNav from '../components/dashboard-comp/SideNav';

function DashboardLayout() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full  flex h-screen">
        <div className="flex md:border-r border-[#cae9ffbf] bg-slate-200 h-full">
          <SideNav />
        </div>
        <div className="lg:w-full lg:h-full lg:flex  lg:flex-col">
          <div className="sticky top-0 left-0 right-0 z-50 w-full">
            <Nav />
          </div>
          <div className=" h-full overflow-y-auto flex-1  lg:pl-8 lg:pr-6 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
