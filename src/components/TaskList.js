import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          handleDelete={() => handleDelete(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;
