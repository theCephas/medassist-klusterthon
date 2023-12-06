import { useSidebarState } from "../../services/states";
import SubMenu from "../SubMenu";
import { DashboardLink, ISideBarLink } from "../../util/NavLink";
import { useNavigate } from "react-router-dom";
import MedAssist from "../../assets/medassist.svg";
import { useAuth } from "../../layout/AuthContext";

const DashboardSideNav = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-secondary w-[300px] border-r h-screen flex-col pt-8 md:pt-8 transition-all duration-500 overflow-y-hidden ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      <div className="flex pl-8">
        <div
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img src={MedAssist} alt="logo" className="lg:cursor-pointer h-8" />
        </div>
      </div>

      <div className="mt-5">
        {DashboardLink.map((item: ISideBarLink, index: number) => {
          return <SubMenu item={item} key={index} />;
        })}

        <button
          onClick={handleLogOut}
          className="ml-[18px] flex gap-2 p-[28px] text-[20px] font-[600] text-[#1b4965] absolute top-[125%] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="#1B4965"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 17L21 12L16 7"
              stroke="#1B4965"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12H9"
              stroke="#1B4965"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
};

export default DashboardSideNav;
