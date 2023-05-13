import img1 from "../assets/axa-mansard.png";
import img2 from "../assets/slazanger.png";
import img3 from "../assets/doc-send-logo.png";
import img4 from "../assets/paystack-logo.png";
import img5 from "../assets/coin-telegraph.png";
import img6 from "../assets/kpmg.png";
import img7 from "../assets/Gabon-airlines 1.png";
import img8 from "../assets/maker-mark 1.png";
const Brands = () => {
  return (
    <div className="container mx-auto pt-5 px-3  mb-8  mt-10 ">
      <div className="py-7">
        <h1 className="md:text-[50px] text-[25px]  Crimson font-semibold ">TOP BRANDS THAT TRUST US</h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-7 mt-6 gap-y-14">
        <img src={img1} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img2} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img3} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img4} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img5} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img6} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img7} className="w-[321.06px] h-[80.57px]" alt="" />
        <img src={img8} className="w-[321.06px] h-[80.57px]" alt="" />
      </div>
    </div>
  );
};

export default Brands;
