import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const currentDateObj = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = currentDateObj.toLocaleDateString('en-US', options);
      setCurrentDate(formattedDate);
    };

    updateDate(); 
    const intervalId = setInterval(updateDate, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    } else {
      alert('Enter some task');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="nav-element">
        <div className="left-section">
          <h1>TO DO</h1>
        </div>
        <div className="right-section">
          <h2>{currentDate}</h2>
        </div>
      </div>
      <div className="input-section">
        <input
          type="text"
          id="taskInput"
          placeholder="TEXT HERE"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button id="addTaskBtn" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="head-text">
        <h1>TO DO LIST HERE</h1>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <div className="task-container" key={index}>
            <div>{task}</div>
            <button onClick={() => handleDeleteTask(index)}>X</button>
          </div>
        ))}
      </ul>
      <div className="footer">
        <p>&copy; 2024 - Todo List App by MUKESH SONKAR </p>
      </div>
    </div>
  );
}

export default App;
