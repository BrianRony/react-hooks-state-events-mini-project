import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskToDelete) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(filteredTasks);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const displayedTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

      const handleSubmit = (newTask) => {
        const { text, category } = newTask;
        const id = Math.floor(Math.random() * 10000);
        setTasks([...tasks, { id, text, category }]);
      };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={displayedTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
