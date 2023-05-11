/** @format */

import AboutImg from "../assets/AboutImg.png";
import check from "../assets/check.svg";
import triangle from "../assets/triangle.svg";

const About = () => {
  return (
    <div className="overflow-hidden relative">
      <img src={triangle} className="absolute top-[]  h-[166.76px]" />
      <div className="flex justify-between flex-col md:flex-row container mx-auto items-center ">
        <div className="w-[50%] mt-[3rem]">
          <div className="flex items-center flex-col ">
            <h1 className="my-8 text-[50px] font-semibold">ABOUT US</h1>
          </div>
          <img src={AboutImg} className="w-[593px] h-[563.6px]" />
        </div>
        <div className="w-[50%] flex flex-col  items-left pl-[5rem] background2">
          <div className="mt-14 ">
            <h1 className="text-[50px] font-semibold">Ozitech Group</h1>
          </div>
          <p className="max-w-xl leading-8  text-[20px] ">
            Lorem ipsum dolor sit amet consectetur. Habitant massa accumsan
            suspendisse pellentesque enim. Amet donec potenti augue nunc euismod
            phasellus ullamcorper.
          </p>

          <div className="">
            <h1 className="text-[20px] font-semibold mt-10">
              Our IT Development Services Include
            </h1>
            <div className="flex flex-col">
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="text-[20px] pl-6">Web design & Development</h1>
              </div>
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="text-[20px] pl-6">
                  Mobile App Development Service
                </h1>
              </div>
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="text-[20px] pl-6">UI/UX design Services</h1>
              </div>{" "}
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="text-[20px] pl-6">Branding & Graphic Design</h1>
              </div>
            </div>
          </div>
          <div className="mt-[3rem]">
            <a
              href="#"
              className="py-3 bg-[#0098CC] font-semibold px-5 rounded-md text-white text-[19px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
