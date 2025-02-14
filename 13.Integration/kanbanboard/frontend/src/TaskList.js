import React, { useState } from "react";
import Task from "./Task";

function TaskList({
  tasks,
  onToggleTask = () => {},
  onRemoveTask = () => {},
  onAddTask = () => {},
}) {
  return (
    <div /* className="TaskList"*/>
      {tasks.map((task) => (
        <Task
          key={task.no}
          task={task}
          onToggle={onToggleTask}
          onRemove={onRemoveTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
