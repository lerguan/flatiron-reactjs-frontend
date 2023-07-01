import React from "react";
import HouseCard from "./HouseCard";

function HouseList({ houses, onDeleteHouse, onHouseSearchLink }) {
  return (
    <ul className="house-cards">
      {houses.map((house) => {
        return (
          <HouseCard key={house.id} house={house} onDeleteHouse={onDeleteHouse} onHouseSearchLink={onHouseSearchLink} />
        );
      })}
    </ul>
  );
}

export default HouseList;
