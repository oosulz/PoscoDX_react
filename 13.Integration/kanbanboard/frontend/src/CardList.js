import React from "react";
import Card from "./Card";
import { Card_List } from "./assets/scss/CardList.scss";

function CardList({ status, cards }) {
  return (
    <div className="Card_List">
      <h1>{status}</h1>
      {cards.map((card) => (
        <li key={card.no}>
          <Card
            title={card.title}
            description={card.description}
            tasks={card.tasks}
          />
        </li>
      ))}
    </div>
  );
}
export default CardList;
