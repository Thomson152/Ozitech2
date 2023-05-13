/** @format */

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const data = [
  {
    id: 1,
    img: img1,
    title: "Website Development",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools",
  },
  {
    id: 2,
    img: img2,
    title: "Mobile App Development",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools, ",
  },

  {
    id: 3,
    img: img3,
    title: "UI/UX Design",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools",
  },

  {
    id: 4,
    img: img4,
    title: "Digital Marketing",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools",
  },

  {
    id: 5,
    img: img5,
    title: "Sas App Development",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools",
  },

  {
    id: 6,
    img: img6,
    title: "Blockchain Development",
    description:
      " The leading web development company that is equipped to deliver your business Goals. With the innovative technology tools",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-5 md:grid-cols-3 gap-x-5 gap-y-9">
      {data.map(({ id, img, title, description }) => {
        return (
          <div
            key={id}
            className="max-w-sm p-6 bg-white border py-16 border-white rounded-md shadow "
          >
            <div className="">
              <img src={img} alt="" />
            </div>
            <div className="pt-1">
              <h1 className="text-[20px] WorkSans font-semibold">{title}</h1>
            </div>
            <div className="">
              <p className="text-[18px] WorkSans  pt-1 font-normal">{description}</p>
            </div>
            <div className="mt-10">
              <a href="" className="px-5 py-2 WorkSans border-black border rounded-md">Learn More</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
