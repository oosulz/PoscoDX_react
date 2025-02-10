import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList(props) {
  return (
    <ol className={"grocery-list"}>
      <GroceryItem name={"Bread"} cnt={10} />
      <GroceryItem name={"Milk"} cnt={5} />
      <GroceryItem name={"Egg"} cnt={20} />
    </ol>
  );
}
export default GroceryList;
