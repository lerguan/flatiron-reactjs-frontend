import React from "react";

function HouseCard({ house, onDeleteHouse }) {
  const { id, address, image, price, size, bedroom, bathroom } = house;

  function handleDelete() {
    fetch(`http://localhost:3000/houses/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <li className="house-card">
      <img scr={image} alt={address} />
      <h4>{address}</h4>
      <h4>{size}</h4>
      <h4>{price}</h4>
      <button onClick={handleDelete}>Remove</button>
    </li>
  );
}

export default HouseCard;
