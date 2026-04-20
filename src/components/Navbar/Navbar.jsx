import { useState } from "react";
import Logo from "../../assets/Images/Logo Icon.png";
import { Menu, X } from "lucide-react";
import Login from "../Login/Login";
import CallToAction from "../CallToAction/CallToAction";
import Links from "../Links/Links";
import SideMenu from "../SideMenu/SideMenu";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const handleToggle = () => setToggleButton((prev) => !prev);
  return (
    <nav className="w-full flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-x-2">
        <img src={Logo} className="w-6" />
        <h1 className="font-bold text-white text-lg font-primary">whitepace</h1>
      </div>
      {/* Links */}
    <Links/>
      <div className="flex items-center xm:gap-x-3">
        <Login
          state="opacity-0 xm:opacity-100"
          px="xm:px-4 lg:px-6"
          py="xm:py-1 lg:py-3"
          text="text-base"
        />
        <CallToAction
          state="opacity-0 xm:opacity-100"
          title="Try Whitepace free"
          ph="xm:px-4 lg:px-6"
          pv="xm:py-1 lg:py-3"
          text="text-base"
        />
        {/* Hamburger Button */}
        <button
          onClick={handleToggle}
          className="relative z-50 w-10 h-10 flex items-center justify-center lg:hidden"
        >
          <Menu
            className={`absolute  transition-all duration-300 ${
              toggleButton ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
            size={30}
            color="white"
            strokeWidth={1.5}
          />
          <X
            className={`absolute  transition-all duration-300 ${
              toggleButton ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
            size={30}
            color="white"
            strokeWidth={1.5}
          />
        </button>
      </div>
      {/* Overlay */}
      {toggleButton && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={handleToggle}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-10/12 bg-primary shadow-lg p-6 flex flex-col gap-6 transition-all duration-300 
          ${toggleButton ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <SideMenu/>
        <Login state="xm:hidden" py="py-4" text="text-xl" />
        <CallToAction
          state="xm:hidden"
          title="Try Whitepace free"
          pv="py-4"
          text="text-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
