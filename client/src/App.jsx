import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import axios from "axios";
import Card from "./Card";

function App() {
  const [search, setSearch] = useState("");
  const [trips, setTrips] = useState([]);

  const searchTravel = async (keywords = "") => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${keywords}`
      );
      const travelData = response.data.data;
      console.log(response);
      setTrips(travelData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    searchTravel(search);
  }, [search]);

  const handleCategoryClick = (category) => {
    setSearch((prev) => (prev ? `${prev} ${category}` : category));
  };

  return (
    <div className="App">
      <h1>เที่ยวที่ไหน</h1>
      <h2>ค้นหาที่เที่ยว</h2>
      <div className="search">
        <input type="text"
        id="text-search"
        value={search}
        onChange={(event)=> setSearch(event.target.value)}
        placeholder="หาที่เที่ยวเเล้วไปกัน..."
         />
      </div>


      <div>
      {trips.map((trip) => (
          <Card
          key={trip.id}
          title={trip.title}
          photo={trip.photos[0]}
          description={trip.description}
          url={trip.url}
          tags={trip.tags}
          photos={trip.photos.slice(1)}
          />
          
        ))}
      </div>
    </div>
  );
}

export default App;
