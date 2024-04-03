// src/components/ItemList.js
import React from "react";

const itemsData = [
  { id: 1, name: "Product 1", description: "Description 1" },
  { id: 2, name: "Product 2", description: "Description 2" },
  { id: 3, name: "Product 3", description: "Description 3" },
  { id: 4, name: "Product 4", description: "Description 4" },
  { id: 5, name: "Product 5", description: "Description 5" }
];

const ItemList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Item List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {itemsData.map(item => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
