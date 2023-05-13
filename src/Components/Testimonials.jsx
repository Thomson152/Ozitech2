import Carousel from "./Carousel";
import triangle from "../assets/triangle.png";
const Testimonials = () => {
  return (
    <div className="container  py-14 mx-auto relative ">
       <img
        src={triangle}
        className="absolute top-[-3rem] left-[-7rem] "
      />
     <Carousel/>
    </div>
  );
};

export default Testimonials;




