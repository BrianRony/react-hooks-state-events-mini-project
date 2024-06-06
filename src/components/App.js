import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(taskToDelete) {
    const filteredTasks = tasks.filter(task => task.id !== taskToDelete.id);
    setTasks(filteredTasks);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const displayedTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  function handleSubmit(text, category) {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={displayedTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
