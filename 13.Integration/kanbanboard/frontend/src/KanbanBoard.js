import React from "react";
import CardList from "./CardList.js";
import data from "./assets/json/data.js";

function KanbanBoard() {
  const [cards, setCards] = React.useState(data);

  return (
    <div className="Kanban_Board">
      <CardList
        key={"To Do"}
        title={"To Do"}
        cards={cards.filter((card) => card.status === "ToDo")}
      />
      <CardList
        key={"Doing"}
        title={"Doing"}
        cards={cards.filter((card) => card.status === "Doing")}
      />
      <CardList
        key={"Done"}
        title={"Done"}
        cards={cards.filter((card) => card.status === "Done")}
      />
    </div>
  );
}

export default KanbanBoard;
