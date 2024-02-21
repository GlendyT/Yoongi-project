import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import CardInside from "../Card/CardInside";
import Header from "../Titulo/Header";

export function Resultado({ descripcion,setDescripcion, remitente, diseño }) {

  const [imageSaved, setImageSaved] = useState(false);

  useEffect(() => {
      if(imageSaved) {
        const timer = setTimeout(() => {
          setImageSaved(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
  }, [imageSaved]);

  const elementRef = useRef(null);
  const htmlToImageConvert = useCallback(() => {
    if(!elementRef.current) return;

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Suga-Verse";
        link.href = dataUrl;

        link.addEventListener('click', () => {
          setImageSaved(true); // Set the state to true when the download starts
        });

        link.click();
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [elementRef]);

  const handleLogout = () =>{
    setDescripcion({})
  }


  return (
    <div className="relative min-h-screen flex sm:justify-center items-center">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-6 py-4 shadow-md">
          <Header/>
            <CardInside
             descripcion={descripcion}
             remitente={remitente}
             diseño={diseño}
             elementRef={elementRef}
             handleLogout= {handleLogout}
             htmlToImageConvert={htmlToImageConvert}
            />

        </div>
      </div>
    </div>
  );
}