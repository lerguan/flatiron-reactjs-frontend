import React from "react";

function HouseCard({ house, onDeleteHouse, onHouseSearchLink }) {
  const { id, address, image, price, year, size, bedrooms, bathrooms } = house;

  function handleDelete() {
    fetch(`http://localhost:3000/houses/${id}`, {
      method: "DELETE",
    });

    onDeleteHouse(id);
  }

  function handleImgClick() {
    fetch(`http://localhost:3000/houses/${id}`)
      .then((r) => r.json())
      .then((house) => onHouseSearchLink(house));
  }

  return (
    <li className="house-card">
      <img src={image} alt={address} onClick={handleImgClick} />
      <h4>{address}</h4>
      <h4>Built in {year}</h4>
      <h4>{size} sqft</h4>
      <h4>
        {bedrooms} bds + {bathrooms} ba
      </h4>
      <h4>${price}</h4>
      <button onClick={handleDelete}>Remove</button>
    </li>
  );
}

export default HouseCard;
