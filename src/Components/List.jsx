import React, { useState } from "react";
import Item from "./Item";

const List = ({ items, onDeleteItems, onToggleItems, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="bg-red-950 w-screen h-60 text-white font-medium flex space-x-7 ">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </div>
      <div className="bg-slate-500 w-screen h-10  text-black font-medium flex ">
        <select
          className="rounded-full"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">SORT BY INPUT</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button
          className="rounded-full bg-white p-4 "
          onClick={() => onClearList()}
        >
          CLEAR LIST
        </button>
      </div>
    </>
  );
};

export default List;
