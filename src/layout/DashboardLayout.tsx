import { Outlet } from 'react-router-dom';
import Nav from '../components/dashboard-comp/Nav';
import SideNav from '../components/dashboard-comp/SideNav';

function DashboardLayout() {
  return (
    <div className="h-screen w-screen overflow-hidden hide-scroll-bar">
      <div className=" w-full h-full">
        <div className="md:flex h-full w-full">
          <div className="flex border-r bg-slate-200 h-full">
            <SideNav />
          </div>
          <div className="w-full">
            <div className="sticky top-0 left-0 right-0 z-50 w-full bg-yellow-200">
              <Nav />
            </div>
            <div className="overflow-y-auto flex-1 pt-0 md:pt-4 lg:pt-[40px] md:px-4 lg:pl-20  lg::pr-6 hide-scroll-bar bg-violet-300 h-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
