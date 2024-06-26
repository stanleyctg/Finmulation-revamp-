import React from "react";
import { FaHome, FaBriefcase, FaChartLine, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="relative w-screen h-20 m-0 items-center
                    flex flex-row bg-primary text-secondary
                    shadow-lg">
        <p className="text-3xl font-bold mx-auto ">Finmulation</p>
        <div className="ml-auto flex space-x-4"></div> 
        <NavbarIcon icon={<FaHome size="28" />} text="Home" />
        <NavbarIcon icon={<FaBriefcase size="32" />} text="Portfolio" />
        <NavbarIcon icon={<FaChartLine size="20" />} text="Analysis" />
        <NavbarIcon icon={<FaUser size="20" />} text="Profile" />
    </div>
  );
}

const NavbarIcon = ({ icon, text="tooltip 💡" }) => {
  return (
    <div className="navbar-icon group">
      {icon}
    <span class="navbar-tooltip group-hover:scale-100">
        {text}
    </span>
    </div>
  );
}

export default Navbar;
