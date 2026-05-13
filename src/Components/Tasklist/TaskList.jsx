import "./TaskList.css";
import { Star, Trash2 } from "lucide-react";

const TaskList = ({ tasks, toggleTaskDone, removeTask, togglePriority }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="list-item">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTaskDone(task.id)}
          />
          <span
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.task}
          </span>

          <div className="btn-control">
            <button
              onClick={() => togglePriority(task.id)}
              className={`btn-star ${task.priority ? "active" : ""}`}
            >
              <Star
                fill={task.priority ? "gold" : "none"}
                color={task.priority ? "gold" : "black"}
              />
            </button>

            <button onClick={() => removeTask(task.id)} className="btn-trash">
              <Trash2 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
