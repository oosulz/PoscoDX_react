import React from "react";
import TaskList from "./TaskList";

function Card({ title, description, tasks }) {
  return (
    <div className="Card">
      <div className="Card_Title">{title}</div>
      <div>
        {description}
        {tasks && tasks.length > 0 && <TaskList tasks={tasks} />}
      </div>
    </div>
  );
}

export default Card;
