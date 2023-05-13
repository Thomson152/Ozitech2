/** @format */

import portfolio1 from "../assets/PortfolioItem1.png";
import portfolio2 from "../assets/PortfolioItem2.png";
import portfolio3 from "../assets/PortfolioItem3.png";
import portfolio4 from "../assets/PortfolioItem4.png";
import portfolio5 from "../assets/PortfolioItem5.png";
import portfolio6 from "../assets/PortfolioItem6.png";
const Portifolio = () => {
  return (
    <div className="mt-24 bg-[#000]">
      <div className="   container mx-auto   pb-8 ">
        <div className=" md:py-[7rem] py-[2rem] ">
          <h1 className="text-white pl-3 Crimson text-[25px] md:text-[50px] font-semibold">
            OUR PORTFOLIO
          </h1>
        </div>
        <div className="grid1  px-3 md:px-5 flex-col md:flex-row flex gap-y-5 md:gap-x-7">
          <div className="relative">
            <img src={portfolio1} alt="" className=" w-[605px] h-[743px]" />
            <div className="absolute hidden testing:border-red-500 w-[450px] h-[130px]  md:w-[531px] md:h-[132.35px]   rounded-md py-4 md:pl-10  bg-bgDark md:top-[35rem] left-9 top-[35rem] md:left-9 testing:left-3">
              <h1 className="md:text-[24px] Poppins font-semibold  text-white">
                SIGMA MOBILE APP
              </h1>
              <p className="md:text-[19px] Poppins md:max-w-[27rem] max-w-md  text-white ">
                Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                dolor sit amet consectetur. Ornare.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-6">
            <div className="relative">
              <img
                src={portfolio2}
                className="h-[357.77px]  w-[600px]"
                alt=""
              />
              <div className="absolute hidden w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark left-[3rem] top-[13rem]">
                <h1 className="text-[19px] Poppins font-semibold  text-white">
                  Beyou product design
                </h1>
                <p className="text-[16px]  Poppins max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={portfolio3}
                className="h-[357.77px]  w-[600px]"
                alt=""
              />
              <div className="absolute hidden w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark left-[3rem] top-[13rem]">
                <h1 className="text-[19px] Poppins font-semibold  text-white">
                  Beyou product design
                </h1>
                <p className="text-[16px] Poppins   max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="grid2 mt-7  grid grid-cols-1  md:grid-cols-2">
          <div className="flex flex-col gap-7">
            <div className="relative">
              <img
                src={portfolio4}
                className="object-contain h-[357.77px] w-[600px]"
                alt=""
              />
              <div
                className="absolute hidden left-[2rem] top-[13rem] w-[420.98px] h-[104.18px]  
              rounded-md pt-5 pl-10  bg-bgDark "
              >
                <h1 className="text-[19px] Poppins font-semibold  text-white">
                  Scoop Divers
                </h1>
                <p className="text-[16px]  Poppins  max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={portfolio5}
                className="h-[357.77px]  object-contain w-[600px]"
                alt=""
              />
              <div className="absolute hidden left-[2rem] top-[13rem] w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark ">
                <h1 className="text-[19px] Poppins font-semibold  text-white">
                  Elope payment
                </h1>
                <p className="text-[16px] Poppins   max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={portfolio6}
              alt=""
              className="w-[595.17px]  object-contain h-[743px]"
            />

            <div className="absolute hidden w-[531px] h-[132.35px]  rounded-md pt-5 pl-10  bg-bgDark top-[35rem] left-9">
              <h1 className="text-[23px] Poppins font-semibold  text-white">
                Sushi Restaurant
              </h1>
              <p className="text-[19px] Poppins max-w-[27rem]  text-white ">
                Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                dolor sit amet consectetur. Ornare.
              </p>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  );
};

export default Portifolio;
