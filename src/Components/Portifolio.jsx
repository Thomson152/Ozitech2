import portfolio1 from "../assets/Portfolio Item 1.png";
import portfolio2 from "../assets/Portfolio Item 2.png";
import portfolio3 from "../assets/Portfolio Item 3.png";
import portfolio4 from "../assets/Portfolio Item 4.png";
import portfolio5 from "../assets/Portfolio Item 5.png";
import portfolio6 from "../assets/Portfolio Item 6.png";
const Portifolio = () => {
  return (
    <div className="mt-24 bg-[#000]">
      <div className="mx-auto container pb-8 ">
        <div className=" py-[7rem]">
          <h1 className="text-white text-[50px] font-semibold">
            OUR PORTFOLIO
          </h1>
        </div>
        <div className="grid1 grid grid-cols-2">
          <div className="relative">
            <img
              src={portfolio1}
              alt=""
              className="object-contain w-[605px] h-[743px]"
            />
            <div className="absolute w-[531px] h-[132.35px]  rounded-md pt-5 pl-10  bg-bgDark top-[35rem] left-9">
              <h1 className="text-[24px] font-semibold  text-white">
                SIGMA MOBILE APP
              </h1>
              <p className="text-[19px]  max-w-[27rem]  text-white ">
                Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                dolor sit amet consectetur. Ornare.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="relative">
              <img
                src={portfolio2}
                className="h-[357.77px] object-contain w-[600px]"
                alt=""
              />
              <div className="absolute w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark left-[3rem] top-[13rem]">
                <h1 className="text-[19px] font-semibold  text-white">
                  Beyou product design
                </h1>
                <p className="text-[16px]   max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={portfolio3}
                className="h-[357.77px] object-contain w-[600px]"
                alt=""
              />
              <div className="absolute w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark left-[3rem] top-[13rem]">
                <h1 className="text-[19px] font-semibold  text-white">
                  Beyou product design
                </h1>
                <p className="text-[16px]   max-w-[27rem]  text-white ">
                  Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                  dolor sit amet consectetur. Ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid2 mt-7  grid grid-cols-2">
          <div className="flex flex-col gap-7">
            <div className="relative">
              <img
                src={portfolio4}
                className="object-contain h-[357.77px] w-[600px]"
                alt=""
              />
              <div className="absolute left-[3rem] top-[13rem] w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark ">
                <h1 className="text-[19px] font-semibold  text-white">
                  Scoop Divers
                </h1>
                <p className="text-[16px]   max-w-[27rem]  text-white ">
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
              <div className="absolute left-[3rem] top-[13rem] w-[420.98px] h-[104.18px]  rounded-md pt-5 pl-10  bg-bgDark ">
                <h1 className="text-[19px] font-semibold  text-white">
                  Elope payment
                </h1>
                <p className="text-[16px]   max-w-[27rem]  text-white ">
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

            <div className="absolute w-[531px] h-[132.35px]  rounded-md pt-5 pl-10  bg-bgDark top-[35rem] left-9">
              <h1 className="text-[23px] font-semibold  text-white">
              Sushi Restaurant
              </h1>
              <p className="text-[19px]  max-w-[27rem]  text-white ">
                Lorem ipsum dolor sit amet consectetur. Ornare. Lorem ipsum
                dolor sit amet consectetur. Ornare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;
