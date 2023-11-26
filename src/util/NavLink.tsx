import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { PiBooks } from "react-icons/pi";
import { BsAlarm } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
export type SubLink = {
  name: string;
  link: string;
  icon?: React.ReactElement;
};

export type SubMenu = {
  head: string;
  subLink: SubLink[];
};

export type ILink = {
  name: string;
  subMenu: boolean;
  path: string;
  icon?: React.ReactElement;
  subLinks?: SubMenu[];
};

export interface SubNavLink {
  id: number;
  name: string;
  icon: JSX.Element;
  url: string;
}

export interface ISideBarLink {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpen?: JSX.Element;
  subNav?: SubNavLink[];
}

export const links: ILink[] = [
  {
    name: "Features",
    subMenu: true,
    path: "",
    icon: <MdOutlineFeaturedPlayList />,
    subLinks: [
      {
        head: "We Offer",
        subLink: [
          {
            name: "Checks",
            link: "/services/agro-services",
            icon: <MdOutlineFeaturedPlayList />,
          },
        ],
      },
    ],
  },
  {
    name: "Pricing",
    subMenu: false,
    path: "/about-us",
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    name: "Blog",
    subMenu: false,
    path: "/blog",
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    name: "About",
    subMenu: false,
    path: "/contact-us",
    icon: <MdOutlineFeaturedPlayList />,
  },
  {
    name: "Contact Us",
    subMenu: false,
    path: "/contact-us",
    icon: <MdOutlineFeaturedPlayList />,
  },
];

export const MainSideBarLinks: ISideBarLink[] = [
  {
    id: 2,
    name: "Features",
    url: "",
    icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
    // iconClosed: <MdOutlineFeaturedPlayList />,
    // iconOpen: <MdOutlineFeaturedPlayList />,
    subNav: [
      {
        id: 0,
        name: " Services",
        url: "/services/agro-services",
        icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
      },
    ],
  },
  {
    id: 3,
    name: "Pricing",
    url: "/about-us",
    icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
    icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
  },
  {
    id: 5,
    name: "About",
    url: "/contact-us",
    icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
  },
  {
    id: 5,
    name: "Contact Us",
    url: "/contact-us",
    icon: <MdOutlineFeaturedPlayList width={"20px"} height={"20px"} />,
  },
];
export const DashboardLink: ISideBarLink[] = [
  {
    id: 3,
    name: "Home",
    url: "/dashboard",
    icon: <RxDashboard width={"20px"} height={"20px"} />,
  },
  {
    id: 4,
    name: "Medication Management",
    url: "/medication_management",
    icon: <FaPersonCircleQuestion width={"20px"} height={"20px"} />,
  },
  {
    id: 5,
    name: "Adherence Tracking",
    url: "/adherence_tracker",
    icon: <MdPets width={"20px"} height={"20px"} />,
  },
  {
    id: 5,
    name: "Reminders",
    url: "/reminders",
    icon: <BsAlarm width={"20px"} height={"20px"} />,
  },
  {
    id: 6,
    name: "Educational Resources",
    url: "/educational_resources",
    icon: <PiBooks width={"20px"} height={"20px"} />,
  },
  {
    id: 7,
    name: "Healthcare Providers",
    url: "/healthcare",
    icon: <MdOutlineHealthAndSafety width={"20px"} height={"20px"} />,
  },
];
