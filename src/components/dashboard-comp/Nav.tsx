import { useState } from "react";
import { useSidebarState } from "../../services/states";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose, MdOutlineViewHeadline } from "react-icons/md";
import NavButton from "../NavButton";
import { IoIosAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import AddDependant from "./AddDependant";
import { useAuth } from "../../layout/AuthContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showAddDependantModal, setShowAddDependantModal] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleShowLogOut = () => {
    setShowLogOut(!showLogOut);
  };

  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="w-full h-auto py-4 shadow z-10 bg-[#fff]">
      <div className="container px-4 mx-auto flex items-center justify-between gap-2 sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1140px]">
        <div className="flex lg:hidden md:block  items-center justify-between md:gap-2 2xl:gap-3">
          <div className="lg:hidden md:block block">
            {showSideBar ? (
              <div
                onClick={() => toggleSidebar(false)}
                className=" cursor-pointer text-[#323232] "
              >
                <MdOutlineClose size={34} />
              </div>
            ) : (
              <div
                onClick={() => toggleSidebar(true)}
                className=" cursor-pointer text-[#323232] "
              >
                <MdOutlineViewHeadline size={34} />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end w-full gap-20 lg:justify-between">
          <div className="relative lg:w-3/5 lg:flex lg:items-center lg:justify-center md:hidden hidden">
            <input
              type="text"
              placeholder="Search anything"
              className="text-sm focus:outline-none active:outline-none h-auto w-full bg-[#fff] rounded-lg p-4 pl-4 border"
            />
            <div className="absolute top-4 right-5 cursor-pointer">
              <HiOutlineSearch size={24} className="hover:stroke-primary" />
            </div>
          </div>

          <div className=" flex gap-2 items-center ">
            <div
              onClick={() => {
                setShowAddDependantModal(true);
              }}
              className="flex items-center justify-center gap-4"
            >
              <NavButton
                className={Dependent}
                text={
                  <div className="flex items-center p-2">
                    <IoIosAdd size={23} />
                    <button>Add Dependent</button>
                  </div>
                }
                path="#"
              />
            </div>
            {showAddDependantModal && (
              <AddDependant closeModal={setShowAddDependantModal} />
            )}
            <div
              onClick={handleShowLogOut}
              className="border relative rounded-lg border-[#62B6CB] p-2 text-slate-600 cursor-pointer active:scale-90 ease-in-out transition-all shadow-md"
            >
              <RxAvatar size={24} />
            </div>
            {showLogOut && (
              <button
                onClick={handleLogOut}
                className="bg-white w-36 flex items-center gap-2 justify-center text-bleack p-5 absolute border rounded-lg border-[#62B6CB] z-30 top-12 right-[-15px] shadow-lg "
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const Dependent =
  "border border-primary text-secondary text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md bg-primary transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
