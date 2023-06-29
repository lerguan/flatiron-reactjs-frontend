import React from "react";
import HouseCard from "./HouseCard";

function HouseList({ houses, onDeleteHouse }) {
  return (
    <ul className="house-cards">
      {houses.map((house) => {
        return <HouseCard key={house.id} house={house} onDeleteHouse={onDeleteHouse} />;
      })}
    </ul>
  );
}
