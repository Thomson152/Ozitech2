
import Hero from "./Hero";
import logo from "../assets/Layer2.png";

const Navbar = () => {
  return (
    <div className="background">
      <div className="flex  container w-full items-center py-7 px-8  mx-auto justify-between">
        <div className="">
          <img src={logo} alt="logo" />
        </div>

        <ul className="flex text-white gap-11 text-[15px]">
          <li>About </li>
          <li>Portfolio </li>
          <li>Service </li>
          <li>Contact</li>
        </ul>
      </div>

      <Hero />
    </div>
  );
};

export default Navbar;
