import { useState } from "react";
import Stats from "./Components/Stats";
import Form from "./Components/Form";
import List from "./Components/List";
import Logo from "./Components/Logo";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (newItem) => {
    setItems((item) => [...items, newItem]);
    // console.log(items);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    setItems((item) => []);
  };
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
