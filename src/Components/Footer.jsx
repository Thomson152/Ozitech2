/** @format */

import logo from "../assets/logo2.png";
import tw from "../assets/twitter.png";
import p from "../assets/p.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
const Footer = () => {
  return (
    <div className="bg-black ">
      <div className=" md:flex md:justify-between py-10 mx-auto  container  md:items-center    grid grid-cols-2 gap-y-8 px-6">
        <div className="1 flex items-left text-left flex-col ">
          <img
            src={logo}
            className="md:w-[156.04px] h-[100px] w-[100px] md:h-[113.94px]"
            alt=""
          />
          <p className="text-white WorkSans text-[12px] leading-5 md:text-[16px] max-w-[15rem] font-normal">
            Lorem ipsum dolor sit amet consectetur. Et suspendisse lacinia
            ligula urna in. Turpis augue risus et purus. Dignissim consequat
            aliquam urna bibendum mauris in ut ac. Fames tincidunt nisl libero
            nibh pellentesque ultrices.
          </p>
        </div>

        <div className="2 mt-9  flex items-left  text-left px-10 flex-col gap-y-3">
          <h1 className="text-white WorkSans gap-y-2 text-[18px] md:text-[25px] font-semibold">
            COMPANY
          </h1>
          <ul className="text-white gap-y-3 WorkSans text-[12px] md:text-[15px] font-normal flex flex-col">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Our Process</li>
            <li>Blog</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="3 flex items-left flex-col gap-y-3">
          <h1 className="md:text-[25px] text-[18px] font-semibold WorkSans text-white  ">
            WHAT WE DO
          </h1>
          <ul className="text-white gap-y-3 WorkSans text-[12px] md:text-[15px] font-normal flex flex-col">
            <li>Wordpress wbsite</li>
            <li>Mobile App Development</li>
            <li>Ui/Ux Design</li>
            <li>Digital marketing</li>
            <li>Graphics & branding</li>
          </ul>
        </div>

        <div className="4 flex items-left flex-col gap-y-3">
          <h1 className="text-white WorkSans text-[18px] md:text-[25px] font-semibold">
            CONTACT US
          </h1>
          <ul className="text-white gap-y-3 WorkSans text-[12px] md:text-[16px] font-normal flex flex-col">
            <li className="max-w-[10rem] ">
              27b Lagos Abekouta- Expressway Lagos
            </li>
            <li>Contact@ozitechgroup.com</li>
            <li>Phone: 080000000000</li>
            <div className="flex flex-row gap-x-4 mt-2 ">
              <img src={tw} alt="" className="w-[30.12px] h-[30.12px]" />
              <img src={p} alt="" className="w-[30.12px] h-[30.12px]" />
              <img src={fb} alt="" className="w-[30.12px] h-[30.12px]" />
              <img src={insta} alt="" className="w-[30.12px] h-[30.12px]" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
