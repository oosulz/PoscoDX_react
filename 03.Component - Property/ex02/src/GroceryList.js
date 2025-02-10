import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
  const groceryItems = [];

  groceries.forEach((grocery) => {
    groceryItems.push(<GroceryItem name={grocery.name} cnt={grocery.cnt} />);
  });

  return <ol className={"grocery-list"}>{groceryItems}</ol>;
}

export default GroceryList;
