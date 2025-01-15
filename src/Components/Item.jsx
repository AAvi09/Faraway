import React from "react";

const Item = ({ item }) => {
  const { description, packed, quantity } = item;
  return (
    <div className="space-x-2 p-2 m-2">
      <span>
        <input type="checkbox" />
      </span>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description}
      </span>
      <span>{quantity}</span>
      <span>❌</span>
    </div>
  );
};

export default Item;
