import { useState } from "react";
import Footer from "./Components/Footer";
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
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List items={items} onDeleteItems={handleDeleteItems} />
      <Footer />
    </div>
  );
}

export default App;
