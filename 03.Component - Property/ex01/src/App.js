import React from "react";
import "./assets/css/styles.css";
import GroceryList from "./GroceryList";

function App(props) {
  return (
    <div id={"App"}>
      <h1>My Grocery List</h1>
      <GroceryList></GroceryList>
    </div>
  );
}

export default App;
