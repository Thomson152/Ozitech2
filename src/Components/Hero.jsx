
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="flex container mx-auto mt-[5rem] md:mt-[10rem] px-4">
      <div className="md:w-[50%] sm:w-[100%] w-[100%] md:text-left   justify-center  flex  flex-col  text-white">
        <h1 className="md:text-[40px] sm:text-[30px] text-[25px]">Welcome to</h1>
        <h2 className="md:text-[70px] sm:text-[30px] text-[40px] ">OZITECH GROUP</h2>

        <div className=" text-white md:text-[30px] text-[25px] mt-3 ">
          <p >professional</p>
          <p className="">IT and Software development agency</p>
        </div>

        <div className=" mt-16 ">
          <img src={arrow} className="w-[4%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
