import React from "react";

const Item = ({ item, onDeleteItems }) => {
  const { description, packed, quantity, id } = item;
  return (
    <div className="space-x-2 p-2 m-2">
      <span>
        <input type="checkbox" />
      </span>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description}
      </span>
      <span>{quantity}</span>
      <button
        onClick={() => {
          onDeleteItems(id);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default Item;
