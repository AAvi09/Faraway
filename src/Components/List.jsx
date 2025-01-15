import React from "react";
import Item from "./Item";

const InitialItems = [
  { id: 1, description: "passport", Packed: false, quantity: 2 },
  { id: 2, description: "socks", packed: false, quantity: 3 },
  { id: 3, description: "pants", packed: true, quantity: 8 },
];

const List = () => {
  return (
    <div className="bg-red-950 w-screen h-80 text-white font-medium flex space-x-7 ">
      {InitialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
