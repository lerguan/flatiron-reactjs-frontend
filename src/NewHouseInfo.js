import React, { useState } from "react";

function NewHouseInfo() {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit() {
    console.log("form data");
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
        <input
          type="text"
          name="Year"
          placeholder="Year of Built"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
}

export default NewHouseInfo;
