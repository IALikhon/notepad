import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="list-item">
          <input type="checkbox" className="check" />
          {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
