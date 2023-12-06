import NavButton from "./NavButton";

import { MainSideBarLinks, ISideBarLink } from "../util/NavLink";
import { useSidebarState } from "../services/states";
import SubMenu from "./SubMenu";

const Aside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);

  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-white lg:bg-white  w-[284px] border-r overflow-auto  h-screen flex-col  pt-5 transition-all duration-500 ${
        !sideBarOpen ? "-translate-x-full lg:translate-x-0" : ""
      }`}
    >
      {MainSideBarLinks.map((item: ISideBarLink, index) => {
        return (
          <>
            <SubMenu item={item} key={index} />
          </>
        );
      })}

      <div className="flex flex-col lg:hidden gap-3 pr-4 px-5 mt-4">
        <NavButton className={signUpBtn} text="Sign Up" path="/sign-up" />
        <NavButton className={loginBtn} text="Login" path="/sign-in" />
      </div>
    </div>
  );
};

export default Aside;

const signUpBtn =
  "text-sm p-2 rounded-sm text-[#fff] bg-primary lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-primary p-2 text-sm rounded-sm font-semibold text-primary hover:text-font hover:bg-secondary hover:border-secondary transition-all duration-500 active:scale-90 select-none tracking-wider whitespace-nowrap";
