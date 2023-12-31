import React, { useState, useEffect } from "react";
import Header from "./Header";
import NewHouseInfo from "./NewHouseInfo";
import HouseList from "./HouseList";
import NavBar from "./NavBar";
import { Route, Switch, useHistory } from "react-router-dom";
import AddressSearchLink from "./AddressSearchLink";

function App() {
  const [houses, setHouses] = useState([]);
  const [address, setAddress] = useState("");
  const history = useHistory();

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
    history.push("/housesearchlink");
  }

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/new">
          <NewHouseInfo onAddHouse={handleAddHouse} />
        </Route>
        <Route exact path="/housesearchlink">
          <AddressSearchLink address={address} />
        </Route>
        <Route exact path="/">
          <HouseList houses={houses} onDeleteHouse={handleDeleteHouse} onHouseSearchLink={handleHouseSearchLink} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
