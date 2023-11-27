import { useState } from "react";
import { useSidebarState } from "../../services/states";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineClose, MdOutlineViewHeadline } from "react-icons/md";
import NavButton from "../NavButton";
import { IoIosAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import AddDependant from "./AddDependant";

const Nav = () => {
  const showSideBar = useSidebarState((state) => state.sideBarOpen);
  const toggleSidebar = useSidebarState((state) => state.toggleSidebar);

  const [showAddDependantModal, setShowAddDependantModal] = useState(false);

  return (
    <div className="w-full h-auto py-4 shadow z-50 bg-[#fff]">
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
            <div className="border rounded-lg border-[#62B6CB] p-2 text-slate-600 cursor-pointer active:scale-90 ease-in-out transition-all shadow-md">
              <RxAvatar size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const Dependent =
  "border border-primary text-secondary text-sm lg:py-2 xxs:py-3 px-[35px] rounded-md bg-primary transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
