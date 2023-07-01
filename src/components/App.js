import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewHouseInfo from "./NewHouseInfo";
import HouseList from "./HouseList";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import AddressSearchLink from "./AddressSearchLink";

function App() {
  const [houses, setHouses] = useState([]);
  const [address, setAddress] = useState("");

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

  function handleHouseSearchLink(house) {
    const address = house.address;
    setAddress(address);
  }

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/new">
          <NewHouseInfo onAddHouse={handleAddHouse} />
        </Route>
        <Route exact path="/houses">
          <HouseList houses={houses} onDeleteHouse={handleDeleteHouse} onHouseSearchLink={handleHouseSearchLink} />
        </Route>
        <Route exact path="/housesearchlink">
          <onHouseSearchLink address={address} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
