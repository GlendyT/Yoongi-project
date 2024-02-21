import Buttons from "../Botones/Buttons";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import dday from "../assets/dday.png";
import d2 from "../assets/d2.png";
import agustd from "../assets/agustd.png";

const dicImg = {
  dday: dday,
  d2: d2,
  agustd: agustd,
};

const styles = {
  dday: {
    div1: "flex space-x-4 pt-5",
    div2: "absolute pl-1 pr-10 pt-8 max-sm:pt-20 ",
    div3: "text-white text-sm tracking-tight pr-4 text-justify pb-20 max-sm:pb-10 ",
    p: "text-white float-end pt-6 pl-20 ",
  },
    d2: {
    div1: "flex space-x-4 pt-5",
    div2: "absolute pl-10 pr-5 pt-10",
    div3: "text-white text-sm tracking-tight pl-10 pr-10 text-right max-sm:pb-10 ",
    p: "text-white float-end pr-5 pt-15 max-sm:text-xs",
  },
  agustd: {
    div1: "flex space-x-2 pt-5",
    div2: "absolute pr-20 pl-10 pt-20 max-sm:pr-20 max-sm:pt-20",
    div3: "text-black text-sm tracking-tight pt-10 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-10 max-md:pr-15 max-sm:text-xs",
    p: "text-black float-end pt-16 max-sm:pt-none pr-0 max-md:pt-5 max-sm:pt-0 max-sm:text-xs",
  },
};

//sm:text-left pt-20 max-md:pt-18 

export default function CardInside({
  descripcion,
  remitente,
  elementRef,
  htmlToImageConvert,
  handleLogout,
  diseño,
}) {
  const [ready, isReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      isReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!ready ? (
        <Spinner />
      ) : (
        <>
          <div ref={elementRef}>
            <div className={styles[diseño].div1}>
              <img src={dicImg[diseño]} alt="" />
              <div className={styles[diseño].div2}>
                <div className={styles[diseño].div3}>
                  {descripcion}
                </div>
                <p className={styles[diseño].p} >
                  -{remitente}
                </p>
              </div>
            </div>
          </div>
          <Buttons
            htmlToImageConvert={htmlToImageConvert}
            handleLogout={handleLogout}
          />
        </>
      )}
    </>
  );
}

/*

  */