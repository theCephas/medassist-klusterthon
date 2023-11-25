import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
import HomeNav from "./HomeNav";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { useSidebarState } from "../services/states";
import MainSideNav from "./MainSideNav";

const Header = () => {
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);

  return (
    <div className="bg-home fixed h-20 top-0 w-full z-50 shadow-md lg:py-0">
      <nav className="container mx-auto px-4 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1140px] lg:flex h-full w-full  items-center font-medium justify-between">
        {/* Menu Btn */}

        <div className="z-50 h-full  lg:w-auto w-full flex items-center gap-4">
          <div className="flex justify-between gap-2">
            <button
              onClick={() => toggleSidebar(!showSideBar)}
              className="text-3xl lg:hidden flex"
            >
              {showSideBar ? <IoMdClose size={38} /> : <IoMdMenu size={38} />}
            </button>
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <img
                src="/src/assets/MedAssist.png"
                alt="logo"
                className="lg:cursor-pointer h-7"
              />
            </div>
          </div>
        </div>
        <div>
          <ul className="lg:flex font-normal hidden items-center text-sm  ">
            <HomeNav setToggle={setToggle} toggle={toggle} />
          </ul>
        </div>
        <div>
          {" "}
          <div className="lg:flex  hidden gap-2 ">
            <>
              <>
                <NavButton
                  className={loginBtn}
                  text="Sign in"
                  path="/sign-in"
                />
                <NavButton
                  className={signUpBtn}
                  text="Get Started"
                  path="/sign-up"
                />
              </>
            </>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative">
          <MainSideNav />
        </div>
      </nav>
    </div>
  );
};

export default Header;

const signUpBtn =
  "border border-primary text-sm lg:py-2 xxs:py-3 px-[30px] rounded-md text-secondary bg-primary hover:bg-secondary hover:text-primary lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-primary text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md text-primary hover:text-secondary hover:bg-primary transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
