
import React, { useState } from 'react';
import "./Dashboard.css";

export const Dashboard = () => {
  const [Inputs, setInputs] = useState("");
  const [todosList, setTodosList] = useState([]);

  const changeInputValue = (e) => {
    setInputs(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    if (Inputs.trim() !== "") {
      setTodosList(prevTodosList => [...prevTodosList, Inputs]);
      setInputs("");
    }
  }

  const deleteTask = (task) => {
    const newTodosList = todosList.filter(todo => todo !== task);
    setTodosList(newTodosList);
  }

  return (
    <div>
      <center>
        <h1>Todos App</h1>
        <input type="text" className="search-box" value={Inputs} placeholder="Enter task here" onChange={changeInputValue} />
        <button type="button" className="add-task-button" onClick={addTask}>Add Task</button>
        <div>
          <ul className="todo-item">
            {todosList.map((task, index) => (
              <li key={index}>
                {task}
                <button className="delete-button" onClick={() => deleteTask(task)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </center>
    </div>
  );
}
