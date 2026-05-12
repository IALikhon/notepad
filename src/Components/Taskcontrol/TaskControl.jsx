import "./TaskControl.css";

const TaskControl = () => {
  const links = ["all", "Completed", "Uncompleted", "Priority"];

  return (
    <div className="nav-sec">
      {links.map((link) => (
        <button key={link} className="nav-link">
          {link}
        </button>
      ))}
    </div>
  );
};

export default TaskControl;