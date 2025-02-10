import React from "react";
import "./assets/css/styles.css";
import GroceryList from "./GroceryList";

function App(props) {
  const groceries = [
    { name: "Bread", cnt: 10 },
    { name: "Milk", cnt: 5 },
    { name: "Egg", cnt: 20 },
  ];

  return (
    <div>
      <h1>My Grocery List</h1>
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
