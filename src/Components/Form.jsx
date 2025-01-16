import React, { useState } from "react";

const Form = ({ onAddItems, onDeleteItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <div className="text-white font-semibold w-screen h-16 bg-yellow-700 text-center flex ">
      <form onSubmit={handleFormSubmit}>
        <h1> What do you need for your trip😘❤</h1>

        <select
          className="text-black font-medium p-2 m-2 w-14 rounded-lg"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          className="text-black font-semibold p-2 m-2 rounded-2xl"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="p-2 m-2 bg-blue-950 text-white font-semibold rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
