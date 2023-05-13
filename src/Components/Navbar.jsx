/** @format */

import Hero from "./Hero";
import logo from "../assets/Layer2.png";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="background">
      <nav className="flex container  w-full items-center py-7 md:px-8 px-3  mx-auto justify-between">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="md:w-[197px] w-[150px] h-[40px] md:h-[52.68px] "
          />
        </div>

        <ul className="hidden md:flex text-white Poppins  gap-11 text-[15px]">
          <li>About </li>
          <li>Portfolio </li>
          <li>Service </li>
          <li>Contact</li>
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-4 top-9 cursor-pointer md:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Mobile */}
        <ul
          className={` md:hidden Poppins  text-white absolute top-20 right-[2rem] w-[300px] rounded-lg justify-center  bg-NavBg backdrop-blur-sm overflow-hidden items-center flex flex-col gap-9 ${
            open
              ? "h-[15rem] transition ease-in-out delay-150 "
              : "h-0  transition ease-in-out delay-150 "
          }`}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Solution</li>
        </ul>
      </nav>

      <Hero />
    </div>
  );
};

export default Navbar;
