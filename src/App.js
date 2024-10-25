import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { Header, Test } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import "./index.css";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const inputBox = document.getElementById("input-box");
    const newItem = inputBox.value.trim();
    if (newItem) {
      setItems([...items, newItem]);
      inputBox.value = "";
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <Header />
      <ToDoList onAdd={handleAddItem} />
      <ul className="max-w-screen-sm mx-auto space-y-4" id="list">
        {items.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            onDelete={() => handleDeleteItem(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
