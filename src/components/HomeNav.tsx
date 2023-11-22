import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { ILink, SubLink, SubMenu, links } from "../util/NavLink";
interface Iprop {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle?: boolean
}
const HomeNav = ({ setToggle }: Iprop) => {
  const [heading, setHeading] = useState("");
  const [, setSubHeading] = useState("");

  return (
    <>
      {links.map((link: ILink, index: number) => (
        <div key={index}>
          <div className="px-3 text-left lg:cursor-pointer group ">
            <div className="relative">
              <Link
                to={link?.path}
                onClick={() => {
                  heading !== link?.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                  setToggle(link?.name === "Services" ? true : false);
                }}
                className="py-7 flex justify-between lg:pr-0 pr-5 hover:text-[#797b79] group  xxs:hover:bg-[#AED1B740] lg:hover:bg-transparent  hover:bg-[#4a85584b] p-2 px-2 rounded-full xxs:text-[#797979]"
              >
                <span className="flex items-center gap-4 whitespace-nowrap">
                  <span className="lg:hidden xxs:text-[#797979] lg:text-[#333333]">{link?.icon}</span>
                  <span className="lg:link lg:link--metis whitespace-nowrap">
                    {link?.name}
                  </span>
                </span>
                <span className=" lg:hidden inline ">
                  {link?.subMenu === false ? (
                    ""
                  ) : heading === link?.name ? (
                    <IoChevronUp />
                  ) : (
                    <IoChevronDown />
                  )}
                </span>
                <span className=" lg:mt-1 lg:ml-2 hidden lg:block group-hover:rotate-180">
                  {link?.subMenu === false ? "" : <IoChevronDown />}
                </span>
              </Link>
            </div>
            {link.subMenu && link.subLinks && (
              <div>
                <div className="absolute top-[50px] hidden group-hover:lg:block hover:lg:block shadow-sm">

                  <div className="bg-[#FFFFFF]  relative  border rounded-sm border-slate-300 p-1 w-40">
                    {link.subLinks.map((mySubLink: SubMenu, index: number) => (
                      <div key={index}>
                        {mySubLink.subLink.map((s: SubLink, index: number) => (
                          <li
                            key={index}
                            className="text-sm text-slate-500 my-2.5 hover:font-semibold "
                          >
                            <Link
                              to={s?.link}
                              className=" hover:text-[#197B30] hover:bg-[#4a85584b] p-2  rounded-md w-full whitespace-nowrap"
                            >
                              {s?.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu */}
          <div className={`${heading === link?.name ? "lg:hidden" : "hidden"}`}>
            {link?.subLinks?.map((s: SubMenu, index: number) => (
              <div key={index}>
                <div>
                  <div>
                    {s?.subLink?.map((slink: SubLink, index: number) => (
                      <li key={index} className="py-3 pl-14 lg:hidden">
                        <Link
                          onClick={() => setToggle(false)}
                          to={slink?.link}
                          className=" flex items-center gap-4"
                        >
                          {slink?.icon}
                          {slink?.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeNav;