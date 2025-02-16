import React from "react";
import TaskList from "./TaskList";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";

const Card = ({ title, description, tasks }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={_Card}>
      <div
        className={`${Card_Title} ${isOpen ? Card_Title_Open : ""}`}
        onClick={toggleOpen}
      >
        {title}
      </div>
      {isOpen && (
        <div>
          {description}
          <TaskList tasks={tasks} />
        </div>
      )}
    </div>
  );
};

export default Card;
