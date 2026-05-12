import "./TaskList.css";

const TaskList = ({ tasks, toggleTaskDone }) => {
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
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
