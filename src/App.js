import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
