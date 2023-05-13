/** @format */

import Card2 from "./Card2";
import left from "../assets/Frame 7.png";
import right from "../assets/Frame 8.png";

const Carousel = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };
  return (
    <div className="relative">
      <div className="mt-[3rem] md:flex-row flex-col flex md:items-center  md:justify-between">
        <div className="pl-10">
          <h1 className="md:text-[50px] text-[30px] Crimson font-semibold ">
            TESTIMONIAL
          </h1>
          <div className="">
            <p className="md:text-[20px] WorkSans font-normal">
              see what our customers say about us
            </p>
          </div>
        </div>
        <div className="row2 hidden  md:flex gap-x-2  mr-8">
          <button onClick={scrollLeft}>
            <img src={left} className="md:w-[59.03px] md:h-[57.14px]" alt="" />
          </button>
          <button onClick={scrollRight}>
            <img src={right} alt="" className="w-[59.03px] h-[57.14px]" />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="carousel p-4 mx-auto flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
