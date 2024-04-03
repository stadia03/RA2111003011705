import React, { useState } from "react";

const ProductForm = ({ onSearch }) => {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [discount, setDiscount] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      productId,
      name,
      price,
      rating,
      discount,
      availability
    };
    onSearch(product);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Search</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", border: "1px solid black", padding: "20px", borderRadius: "5px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Rating:</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Discount:</label>
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Availability:</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default ProductForm;
