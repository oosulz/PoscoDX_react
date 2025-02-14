import React from "react";

function Task({ task, onToggle, onRemove }) {
  return (
    <li className="_Task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.no)}
      />
      {task.name}
      <a
        href="#"
        className="Task_Remove"
        onClick={(e) => {
          e.preventDefault();
          onRemove(task.no);
        }}
      >
        삭제
      </a>
    </li>
  );
}

export default Task;
