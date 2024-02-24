import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import CardInside from "../Card/CardInside";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../Titulo/Header";

const notify = () => {
  toast.success('Image Downloaded!', {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  theme: "light",
  }); 
};


export function Resultado({ descripcion,setDescripcion, remitente, diseño }) {

  const [imageSaved, setImageSaved] = useState(false);

  useEffect(() => {
      if(imageSaved) {
        const timer = setTimeout(() => {
          notify();
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
    <div className="relative min-h-screen sm:justify-center items-center max-sm:text-xs">
      <div className="relative sm:max-w-sm w-full">
          <Header/>
            <CardInside
             descripcion={descripcion}
             remitente={remitente}
             diseño={diseño}
             elementRef={elementRef}
             handleLogout= {handleLogout}
             htmlToImageConvert={htmlToImageConvert}
             notify= {notify}
            />
            <ToastContainer/>
      </div>
    </div>
  );
}
