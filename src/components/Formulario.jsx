import { useState } from "react";
import Header from "../Titulo/Header";
import List from "../ListadoDiseños/List";

const Formulario = ({ setDescripcion, setRemitente, setDiseño }) => {
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [design, setDesign] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((description === "", from === "" || design === "")) {
      setError(true);
      return;
    }
    setError(false);

    setDescripcion([description]);
    setRemitente([from]);
    setDiseño([design]);
  };

  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center text-white">
      <div className="relative sm:max-w-sm w-full">
        <div className="relative w-full px-10 py-4 shadow-md">
          <Header />
          <form className="mt-5 font-mono" onSubmit={handleSubmit}>
            <div className="my-5">
              <label
                className="flex float-start text-sm mb-2"
                htmlFor="descripcion"
              >
                Your Lyrics
              </label>
              <div className="text-sm mb-2 float-end text-black">{280 - description.length}/280</div>
              <textarea
                maxLength={280}
                placeholder="Write something"
                rows={5}
                id="descripcion"
                name="descripcion"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              /> 
            </div>

            <div className="my-5 ">
              <label className="flex float-start text-gray-700 text-sm mb-2 text-white">
                From
              </label>
              <div className="text-sm mb-2 float-end text-black">{30 - from.length}/30</div>
              <input
                maxLength={30}
                placeholder="Your Name"
                id="remitente"
                name="remitente"
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
            </div>
            <List setDesign={setDesign} />

            <button
              disabled={!design}
              id="btn"
              type="submit"
              className="w-full bg-black text-white cursor-pointer p-3 font-pixel uppercase disabled:bg-opacity-25 disabled:cursor-not-allowed transition-colors"
            >
              Create post
            </button>
          </form>
        </div>
        {error && (
          <p className="text-red-700 text-center font-bold uppercase font-mono pt-1">
            All questions must be filled out
          </p>
        )}
      </div>
    </div>
  );
};

export default Formulario;
