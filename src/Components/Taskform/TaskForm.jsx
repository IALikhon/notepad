import { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    if (newTask.trim()) {
      addTask({
        id: Date.now(),
        task: newTask,
        done: false,
        priority: false,
      });

      setNewTask("");
    }
  };
  return (
    <div className="note-form">
      <input
        id="note-input"
        type="text"
        placeholder="Make a new note..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button className="btn-save" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default TaskForm;
