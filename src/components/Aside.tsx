

import NavButton from "./NavButton";


import { MainSideBarLinks, ISideBarLink} from "../util/NavLink";
import { useSidebarState } from "../services/states";
import SubMenu from "./SubMenu";


const Aside = () => {
  const sideBarOpen = useSidebarState((state) => state.sideBarOpen);
//   const toggleSideBar = useSidebarState((state) => state.toggleSidebar);
//   const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState(null);

//   const navigate = useNavigate();
  // const [temp, setTemp] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleMenuClick = (route:string) => {
//     toggleSideBar(false)
//     navigate(route)
//   }

//   useEffect(() => {
//     //@ts-ignore
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser !== null) {
//       setUser(storedUser);
//     } else {
//       setUser(null);
//     }
//   }, []);

//   const handleLogout = () => {
//     // setTemp(true);
//     window.localStorage.removeItem("accessToken");
//     window.localStorage.removeItem("user");
//   };

  return (
    <div
      className={`lg:flex fixed lg:relative md:top-16 lg:top-0 left-0 z-40 bg-[#EEEEEE] lg:bg-white  w-[284px] border-r overflow-auto  h-screen flex-col  pt-5 transition-all duration-500 ${
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
          <NavButton className={loginBtn} text="Login" path="/login" />
        </div>

    </div>
  );
};

export default Aside;

const signUpBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[30px] rounded-sm text-[#fff] bg-[#197B30] hover:bg-white hover:text-[#479559] lg:inline-block select-none tracking-wider font-medium whitespace-nowrap";

const loginBtn =
  "border border-[#197B30] text-sm lg:py-2 xxs:py-3.5 px-[35px] rounded-sm text-[#197B30] hover:text-white hover:bg-[#479559] transition-all duration-500 active:scale-90 select-none tracking-wider font-medium whitespace-nowrap";
