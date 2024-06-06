import React from "react";
import Task from "./Task";

function TaskList({tasks , handleDelete}) {

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
