import React, { useState } from "react";

function NewHouseInfo(onAddHouse) {
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
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="Listing Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="text" name="size" placeholder="size" value={size} onChange={(e) => setSize(e.target.value)} />
        <input
          type="text"
          name="Year"
          placeholder="Year of Built"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          name="bedrooms"
          placeholder="Number of Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <input
          type="text"
          name="Bathrooms"
          placeholder="Number of Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
}

export default NewHouseInfo;
