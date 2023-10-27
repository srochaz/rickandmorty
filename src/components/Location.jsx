import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const idLocation = e.target.idLocation.value

    axios
     .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
     .then(({data}) => setLocation(data))
     .catch((err) => console.log(err))
  }
  
  return (
    <section className="grid justify-center gap-4">
    
    <div className="max-w-[200px] overflow-hidden items-center">
      <img className="absolute" src="/rym.png" alt="" />
      <img className="rotate" src="/vortex .png" alt="" />      
    </div>

      <form onSubmit={handleSubmit} className="flex justify-center ">
        <input placeholder="Type a Location Id ..." name="idLocation" className="text-black" type="number" />
        <button type="submit" className="flex gap-2 items-center borderGreen p-2">
          Search <IconSearch size={18} />
          {""}
        </button>
      </form>

      <section className="borderGreen p-2">
        <h3 className="text-lg text-center">Wellcome to {location?.name}</h3>

        <ul className="flex gap-5 ">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
