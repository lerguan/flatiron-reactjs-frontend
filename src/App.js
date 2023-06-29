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
    const newHousesArray = [...houses, newHouseInfo];
    setHouses(newHousesArray);
  }

  function handleDeleteHouse(id) {
    const newHousesArray = houses.filter((house) => house.id !== id);
    setHouses(newHousesArray);
  }

  return (
    <div className="app">
      <Header />
      <NewHouseInfo onAddHouse={handleAddHouse} />
      <HouseList houses={houses} onDeleteHouse={handleDeleteHouse} />
    </div>
  );
}

export default App;
