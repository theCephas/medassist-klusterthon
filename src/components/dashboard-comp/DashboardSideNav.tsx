import { useSidebarState } from "../../services/states";
import SubMenu from "../SubMenu";
import { DashboardLink, ISideBarLink } from "../../util/NavLink";
import { useNavigate } from "react-router-dom";

const DashboardSideNav = () => {
    const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
    const navigate = useNavigate()
  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-[#EEEEEE] lg:bg-white  w-[300px] border-r   h-screen flex-col  lg:pt-8 md:pt-8 transition-all duration-500 overflow-y-hidden ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      <div className="flex pl-8">
        <div
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            src="/src/assets/MedAssist.png"
            alt="logo"
            className="lg:cursor-pointer h-8"
          />
        </div>
      </div>

      <div className="mt-5">
        {DashboardLink.map((item: ISideBarLink, index: number) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DashboardSideNav;
