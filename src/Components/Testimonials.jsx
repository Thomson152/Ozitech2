import Carousel from "./Carousel";
import triangle from "../assets/triangle.png";
const Testimonials = () => {
  return (
    <div className="container mx-auto relative ">
       <img
        src={triangle}
        className="absolute top-[-6rem] left-[-4rem] "
      />
     <Carousel/>
    </div>
  );
};

export default Testimonials;
