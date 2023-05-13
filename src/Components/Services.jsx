import Card from "./Card";

const Services = () => {
  return (
    <div className="background3">
      <div className="mx-auto flex py-10 items-center text-left flex-col  container">
        <div className="my-5">
          <h1 className="text-white font-semibold  text-left Crimson  text-[30px]">OUR SERVICES</h1>
        </div>
        <div className=" md:py-[5rem]  ">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
