import "./TaskControl.css";

const TaskControl = ({ activeFilter, setActiveFilter }) => {
  const links = ["all", "completed", "uncompleted", "priority"];

  return (
    <div className="nav-sec">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => setActiveFilter(link)}
          className= {`nav-link ${activeFilter === link ? "active" : ""}`}
        >
          <span> {link} </span>
        </button>
      ))}
    </div>
  );
};

export default TaskControl;
