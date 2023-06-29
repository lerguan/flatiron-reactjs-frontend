import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import NewHouseInfo from "./NewHouseInfo";
import HouseList from "./HouseList";

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/houses")
      .then((r) => r.json())
      .then((housesArray) => {
        setHouses(housesArray);
      });
  }, []);

  function handleAddHouse(newHouseInfo) {
    const newHousesArray = [...housesArray, newHouseInfo];
    setHouses(newHousesArray);
  }

  return (
    <div className="App">
      <Header />
      <NewHouseInfo onAddHouse={handleAddHouse} />
      <HouseList />
    </div>
  );
}

export default App;
