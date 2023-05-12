import profile from "../assets/profile.png";
const Card2 = () => {
  return (
    <div className="w-[414px] border h-[308px] rounded-lg mr-4 border-black shadow">
      <div className="para">
        <p className="font-normal max-w-[19rem] text-[15px]  m-7">
          Lorem ipsum dolor sit amet consectetur. Interdum diam tincidunt libero
          est vel commodo volutpat. Ac urna eu neque sollicitudin aliquet eu
          dignissim pharetra tellus....
        </p>
      </div>

      <div className="m-5 flex items-center">
        <div>
          <img src={profile} className="w-[88px] h-[88px]" alt="" />
        </div>
        <div className="ml-4">
          <h2 className="text-[15px] text-black font-normal">Thomas Scot </h2>
          <h1 className="text-[12px] text-black font-light">
            CEO marketing Dax
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card2;
