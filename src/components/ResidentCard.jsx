import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/residents";

const ResidentCard = ({ residentEndPoint }) => {
  const [resident, setResident] = useState(null);

   useEffect(() => {
    axios
      .get(residentEndPoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <article>
      <header className="relative ">
        <img className="borderGreen p-1" src={resident?.image} alt="" />
        <div className="borderGreen absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex items-center gap-2">
          <div className={`h-3 w-3 ${characterStatus[resident?.status]} rounded-full`}></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      
      <div className="borderGreen p-2">
        <h4 className="text-lg text-center">{resident?.name}</h4>
        <ul className="grid">
          <li><span className="text-gray-400 px-4 ">Species</span> {resident?.species}</li>
          <li><span className="text-gray-400 px-4">origin</span> {resident?.origin.name}</li>
          <li><span className="text-gray-400 px-4">times appear</span> {resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  );
};

export default ResidentCard;
