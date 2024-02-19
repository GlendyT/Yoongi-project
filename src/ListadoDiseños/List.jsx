import { DISEÑOS } from "../constants";

export default function List({ design, setDesign }) {

  return (
    <div>
      <div className="my-5">
        <label className=" text-gray-700 text-sm mb-2">Design</label>

        <select
          name="diseño"
          placeholder="Select Your ArtWork"
          id="diseno"
          value={design}
          onChange={(e) => setDesign(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700  "

        >
          <option value="">Select your artwork </option>
          <option value="dday">D-Day</option>
          <option value="d2">D-2</option>
          <option value="agustd">Agust D</option>

        </select>
      </div>
    </div>
  );
}
