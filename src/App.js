import { useEffect, useState } from "react";
import Map from "./components/Map.js";
import Loader from "./components/Loader";
import "./styles.css";
import Header from "./components/Header.js";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      <div className="App">{!loading ? <Map data={data} /> : <Loader />}</div>
    </div>
  );
}
