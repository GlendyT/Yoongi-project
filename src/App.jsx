import Formulario from "./components/Formulario";

import { Resultado } from "./components/Resultado";
import {  useState } from "react";
import "./index.css";
import Spinner from "./components/Spinner";
import { DiseñosImg } from "./Diseños/DiseñosImg";



function App() {
  const [descripcion, setDescripcion] = useState([]);
  const [remitente, setRemitente] = useState([]);
  const [diseño, setDiseño] = useState([]);


  return (
    <div className=" relative min-h-screen flex flex-col sm:justify-center items-center">

      {!descripcion.length > 0 ? (
        <Formulario setDescripcion={setDescripcion} setRemitente={setRemitente} setDiseño={setDiseño}  />
      ) : (
        <Resultado
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        remitente={remitente}
        setRemitente={setRemitente}
        diseño={diseño}
        setDiseño={setDiseño}
      />


      )}
    </div>
  );
}

export default App;
