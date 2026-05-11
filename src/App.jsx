import "./App.css";

const App = () => {
  const links = ["all", "Completed", "Uncompleted", "Priority"];

  return (
    <div className="header">
      <div className="header_name">
        <span>Note_Pad</span>
      </div>

      <div className="note-form">
        <input id="note-input" type="text" placeholder="Make a new note..." />
        <button className="btn-save">Save</button>
      </div>

      <div className="nav-sec">
        {links.map((link) => (
          <button key={link} className="nav-link">{link}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
