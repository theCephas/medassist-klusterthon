import { useSidebarState } from "../../services/states";
import DashboardSideNav from "./DashboardSideNav";

const SideNav = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const toggleSideBarOpen = useSidebarState((state) => state.toggleSidebar);
  return (
    <>
      <div
        className={`fixed bg-[#020101a6] w-full h-[100%]   top-0  left-0 z-10 lg:hidden overflow-y-hidden border-r  ${
          !sideBarOpen ? "hidden" : ""
        }`}
        onClick={() => toggleSideBarOpen()}
      ></div>

      <DashboardSideNav />
    </>
  );
};

export default SideNav;
