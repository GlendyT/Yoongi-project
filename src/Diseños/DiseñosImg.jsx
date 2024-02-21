import dday from "../assets/dday.png";
import d2 from "../assets/d2.png";
import agustd from "../assets/agustd.png";

export const DiseñosImg = () => {
  return (
    <div className="flex space-x-4 pt-10">
      <div className="size-50 relative">
        <img src={dday} />
        <div className="absolute bottom-0 w-full pr-8 mb-20"> 
        <div className="text-white text-sm pl-15 tracking-tight pl-3 pr-4 text-justify ">
        </div>
        </div>
      </div>



      <div className="size-50 relative">
        <img src={d2} />
        <div className="absolute bottom-0 w-full pr-3 mb-10 pl-20"> 
        <div className="text-white text-sm text-right pl-15 tracking-tight pb-4 sm:tex-right">
        </div>
        </div>
      </div>



      <div className="size-50 relative">
        <img src={agustd} />
        <div className="absolute bottom-0 w-full pr-20"> 
        <div className="text-white text-sm text-left pl-15 tracking-tight pb-7 pl-2 sm:text-left">
        </div>
        </div>
      </div>
    </div>
  );
};
