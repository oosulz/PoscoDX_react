import React from "react";
import { title } from "./assets/scss/App.scss";
import GroceryList from "./GroceryList";

function App(props) {
  const groceries = [
    { name: "Bread", cnt: 10 },
    { name: "Milk", cnt: 5 },
    { name: "Egg", cnt: 20 },
  ];

  return (
    <div id={"App"}>
      <h1 className={title}>{"Grocery List"}</h1>
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
