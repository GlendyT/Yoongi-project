import Buttons from "../Botones/Buttons";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import dday from "../assets/dday.png";
import d2 from "../assets/d2.png";
import agustd from "../assets/agustd.png";
import pp2 from "../assets/pp2.png"
import hgm from "../assets/hgm.png"

const dicImg = {
  dday: dday,
  d2: d2,
  agustd: agustd,
  pp2: pp2,
  hgm: hgm,
};

const styles = {
  dday: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pb-40 pt-20 max-ms:p-20`}",
    div3: "text-white text-sm tracking-tight pb-20 ",
    p: "text-white float-end ",
  },
    d2: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block pl-16 pr-6 pb-40 pt-24 max-ms:p-20`}",
    div3: "text-white text-sm tracking-tight text-center pl-20 ",
    p: "text-white text-center pr-5 pt-20 max-sm:text-xs",
  },
  agustd: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pb-40 pt-32 max-ms:p-20`}",
    div3: "text-black text-sm tracking-tight pt-10 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs",
    p: "text-black float-end pt-16 max-sm:pt-none pr-0 max-md:pt-5 max-sm:pt-0 max-sm:text-xs",
  },
  pp2: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pt-40 pb-32 max-ms:p-20`}",
    div3: "backdrop-blur-sm bg-white/30 text-black text-sm tracking-tight pt-10 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs",
    p: "text-black float-end pt-16 max-sm:pt-none pr-0 max-md:pt-5 max-sm:pt-0 max-sm:text-xs",
  },
   hgm: {
    div1: "{`justify-center bg-no-repeat bg-center bg-contain block px-16 pb-40 pt-32 max-ms:p-20`}",
    div3: "text-white text-sm tracking-tight pt-10 text-justify max-md:pt-5 max-sm:pt-5 max-sm:pb-10 max-sm:pr-2 max-md:pr-15 max-sm:text-xs",
    p: "text-white float-end pt-16 max-sm:pt-none pr-0 max-md:pt-5 max-sm:pt-0 max-sm:text-xs",
  },
};

export default function CardInside({
  descripcion,
  remitente,
  elementRef,
  htmlToImageConvert,
  handleLogout,
  diseño,
  notify
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
            <div className={styles[diseño].div1}
             style={{backgroundImage:`url(${dicImg[diseño]})`}}
            >
              <div className="p-0">
                <div className={styles[diseño].div3}
                >
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
            notify={notify}
          />
        </>
      )}
    </>
  );
}

/*

  */