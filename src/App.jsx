import { useState } from "react";
import "./App.css";
import TaskControl from "./Components/Taskcontrol/TaskControl";
import TaskList from "./Components/Tasklist/TaskList";
import TaskForm from "./Components/Taskform/TaskForm";
import { getStoredTasks, updateLocalStorage } from "./Utils/localStorageUtils";

const App = () => {
  const [tasks, setTasks] = useState(getStoredTasks);

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTask = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.done;
    if (activeFilter === "uncompleted") return !task.done;
    if (activeFilter === "priority") return task.priority;
    return false;
  });

  const addTask = (newTask) => {
    const updatedTask = [...tasks, newTask];

    setTasks(updatedTask);
    updateLocalStorage(updatedTask);
  };

  const removeTask = (id) => {
    const updatedTask = tasks.filter((t) => t.id !== id);
    setTasks(updatedTask);
    updateLocalStorage(updatedTask);

  };

  const togglePriority = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, priority: !task.priority } : task,
    );
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
      <TaskControl
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <TaskList
        tasks={filteredTask}
        toggleTaskDone={toggleTaskDone}
        togglePriority={togglePriority}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
