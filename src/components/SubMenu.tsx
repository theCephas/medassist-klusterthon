import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSidebarState } from "../services/states";
import { ISideBarLink, SubNavLink } from "../util/NavLink";

const SideBarLink = styled(NavLink)`
  display: flex;

  align-items: center;
  justify-items: space-between;
  padding: 28px;
  height: 60px;
  padding-top: 24px;

  &:hover {
    color: #1b4965;
    cursor: pointer;
  }
  &:active {
    color: #1b4965;
    font-weight: bold;
  }
`;
const SideBarLabel = styled.span`
  margin-left: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
`;

const SubMenu = ({ item }: { item: ISideBarLink }) => {
  const location = useLocation();
  const [subnav, setSubnav] = useState(false);
  const toggleSideBar = useSidebarState((state) => state.toggleSidebar);

  const activeLink = `text-[#62B6CB] rounded-tl-lg rounded-bl-lg border-r-4 border-[#62B6CB] font-bold `;

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <IconContext.Provider value={{ size: "20" }}>
        <SideBarLink
          to={item.url}
          className={`border- ${
            location.pathname === item.url
              ? activeLink
              : "text-font font-light hover:cursor-pointer"
          }`}
          onClick={() => (item.subNav ? showSubnav() : toggleSideBar(false))}
        >
          {/* <div>{item.icon}</div> */}
          <SideBarLabel>{item.name}</SideBarLabel>
          <div className={`ml-auto`}>
            {item.subNav && subnav
              ? item.iconOpen
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SideBarLink>
        {subnav &&
          item.subNav &&
          item.subNav.map((item: SubNavLink, index: number) => {
            return (
              <NavLink
                to={item.url}
                // activeClassName="active-link"
                className={` h-16 pl-1 pb-5 flex items-center hover:cursor-pointer ${
                  location.pathname === item.url ? activeLink : "text-[#A2A2A2]"
                }`}
                key={index}
                onClick={() => toggleSideBar(false)}
              >
                <p className="ml-14 ">{item.icon}</p>
                <SideBarLabel>{item.name}</SideBarLabel>
              </NavLink>
            );
          })}
      </IconContext.Provider>
    </>
  );
};

export default SubMenu;
