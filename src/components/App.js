import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/App.css";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (input) => {
    console.log(input);
    setInputText(input);
  };

  const handleTask = () => {
    setTasks([...tasks, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  return (
    <div className="App">
      <header>
        <h1>Mi lista de tareas</h1>
      </header>
      <Form
        inputText={inputText}
        handleInputChange={handleInputChange}
        tasks={tasks}
        handleTask={handleTask}
      />
      <TodoList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
