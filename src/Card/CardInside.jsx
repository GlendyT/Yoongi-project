import Buttons from "../Botones/Buttons";
import Spinner from "../components/Spinner";
import{ useEffect, useState } from "react";
import dday from "../assets/dday.png"
import d2 from "../assets/d2.png"
import agustd from "../assets/agustd.png"

const dicImg = {
  dday : dday,
  d2 : d2,
  agustd : agustd,
}


export default function CardInside({
  descripcion,
  remitente,
  elementRef,
  htmlToImageConvert,
  handleLogout,
  diseño
}) {
  
  const [ready, isReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      isReady(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {
      !ready ? (
        <div className="p-10">
          <Spinner/>
        </div>
      ) : (
        <> 
        <div
        ref={elementRef}
        className="shadow appearance-none border rounded w-full pt-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none text-center bg-purple-600"
      >
        {descripcion}
        <div className="text-gray-400 float-end text-1xl font-black py-3">
          -{remitente}
        </div>
        <img
         src={dicImg[diseño]}
         alt="Card"
         
        />
        <div className="text-sm text-center pt-20">INTO THE YOONGI VERSE</div>
      </div>
      <Buttons
        htmlToImageConvert={htmlToImageConvert}
        handleLogout={handleLogout}
      />
      </> 
      )
    }


    </>
  );
}
