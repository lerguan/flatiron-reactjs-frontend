import React, { useState } from "react";

function NewHouseInfo({ onAddHouse }) {
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [size, setSize] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/houses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: address,
        image: image,
        price: price,
        year: year,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        size: size,
      }),
    })
      .then((r) => r.json())
      .then((newHouse) => onAddHouse(newHouse));
  }

  return (
    <div className="new-house-info">
      <form onSubmit={handleSubmit}>
        <label>
          Input Property Address:
          <input
            type="text"
            name="address"
            placeholder="Street, city, state, zipcode"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Input Property Image URL:
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Input Listing Price:
          <input
            type="number"
            name="Price"
            placeholder="Listing Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Input property size:
          <input
            type="number"
            name="size"
            placeholder="Size in sqft"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </label>
        <label>
          Input property built year:
          <input
            type="number"
            name="Year"
            placeholder="Year of Built"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Input Number of Bedrooms:
          <input
            type="number"
            name="bedrooms"
            placeholder="Number of Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </label>
        <label>
          Input Number of Bathrooms:
          <input
            type="number"
            name="Bathrooms"
            placeholder="Number of Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </label>
        <button type="submit">Add House</button>
      </form>
    </div>
  );
}

export default NewHouseInfo;
