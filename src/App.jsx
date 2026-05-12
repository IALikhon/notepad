import { useState } from "react";
import "./App.css";
import TaskControl from "./Components/Taskcontrol/TaskControl";
import TaskList from "./Components/Tasklist/TaskList";
import TaskForm from "./Components/Taskform/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Learn to code",
      done: false,
    },
    {
      id: 2,
      task: "Create a project",
      done: false,
    },
    {
      id: 3,
      task: "Become a developer",
      done: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTask = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.done;
    if (activeFilter === "uncompleted") return !task.done;
    return true;
  });

  const addTask = (newTask) => {
    const updatedTask = [...tasks, newTask];

    setTasks(updatedTask);
  };

  const toggleTaskDone = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );
    setTasks(updatedTask);
  };

  return (
    <div className="header">
      <div className="header_name">
        <span>Note_Pad</span>
      </div>

      <TaskForm addTask={addTask} />
      <TaskControl activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TaskList tasks={filteredTask} toggleTaskDone={toggleTaskDone} />
    </div>
  );
};

export default App;
