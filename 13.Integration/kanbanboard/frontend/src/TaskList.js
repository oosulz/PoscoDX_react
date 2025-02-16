import React from "react";
import Task from "./Task";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";

const TaskList = ({ tasks }) => {
  return (
    <div className={Task_List}>
      {tasks.map((task) => (
        <Task key={task.no} no={task.no} name={task.name} done={task.done} />
      ))}
      <input className={Input_Add_Task} type="text" placeholder="Add Task" />
    </div>
  );
};

export default TaskList;
