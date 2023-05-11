
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="flex container mt-[10rem] boreder justify-between">
      <div className="w-[50%] text-left px-14  justify-center  flex flex-col text-white">
        <h1 className="text-[40px]">Welcome to</h1>
        <h2 className="text-[70px] ">OZITECH GROUP</h2>

        <div className=" text-white  text-[30px]  mt-3 ">
          <p className="  ">professional</p>
          <p>IT and Software development agency</p>
        </div>

        <div className=" mt-16 ">
          <img src={arrow} className="w-[4%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
