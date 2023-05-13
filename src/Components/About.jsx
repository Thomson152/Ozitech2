/** @format */

import AboutImg from "../assets/AboutImg.png";
import check from "../assets/check.svg";
import triangle from "../assets/triangle.png";

const About = () => {
  return (
    <div className="overflow-hidden container mx-auto relative">
      <img
        src={triangle}
        className="absolute  hidden  top-[-5rem]  left-[-3rem]"
      />
      <div className="flex md:justify-between  border-red-500  px-6 flex-col md:flex-row  items-center ">
        <div className="md:w-[50%]  mt-[3rem]">
          <div className="flex items-center flex-col ">
            <h1 className="md:my-8 my-2  text-[35px] md:text-[50px] Crimson font-semibold">
              ABOUT US
            </h1>
          </div>
          <img src={AboutImg} className="lg:w-[593px] lg:h-[563.6px]" />
        </div>
        <div className=" md:w-[50%] w-[100%]  flex flex-col  items-left md:pl-[5rem] background2">
          <div className="mt-14 ">
            <h1 className="lg:text-[50px] text-[25px]  Crimson font-semibold">
              Ozitech Group
            </h1>
          </div>
          <p className="lg:max-w-xl Crimson leading-8  md:text-[20px] text-[18px] ">
            Lorem ipsum dolor sit amet consectetur. Habitant massa accumsan
            suspendisse pellentesque enim. Amet donec potenti augue nunc euismod
            phasellus ullamcorper.
          </p>

          <div className="">
            <h1 className="md:text-[20px] text-[18px]  Crimson font-semibold mt-10">
              Our IT Development Services Include
            </h1>
            <div className="flex  flex-col">
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="md:text-[20px] text-[17px] WorkSans pl-6">
                  Web design & Development
                </h1>
              </div>
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="md:text-[20px] text-[17px] WorkSans pl-6">
                  Mobile App Development Service
                </h1>
              </div>
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="md:text-[20px] text-[17px] WorkSans pl-6">
                  UI/UX design Services
                </h1>
              </div>{" "}
              <div className="flex mt-3 flex-row">
                <img src={check} alt="check" />
                <h1 className="md:text-[20px] text-[17px] WorkSans pl-6">
                  Branding & Graphic Design
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-[3rem]">
            <a
              href="#"
              className="md:py-3 py-3 bg-[#0098CC] font-semibold md:px-5 px-4 rounded-md text-white WorkSans text-[15px] md:text-[19px]"
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
