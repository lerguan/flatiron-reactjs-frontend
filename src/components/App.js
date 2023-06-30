import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewHouseInfo from "./NewHouseInfo";
import HouseList from "./HouseList";
import { Route, Switch } from "react-router-dom";

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
      <NavBar />
      <Switch>
        <Route exact path="/new">
          <NewHouseInfo onAddHouse={handleAddHouse} />
        </Route>
        <Route exact path="/">
          <HouseList houses={houses} onDeleteHouse={handleDeleteHouse} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
