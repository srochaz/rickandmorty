import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getRandomNumber from "./utils/random";
import ResidentList from "./components/ResidentList";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="px-4 min-h-screen backGround text-white ">
      <Location location={location} setLocation={setLocation}/>
      <ResidentList residents={location?.residents ?? []}/>
    </main>
  );
}

export default App;
