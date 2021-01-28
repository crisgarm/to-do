import React, { useState } from "react";
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

  return (
    <div className="App">
      <header>
        <h1>Mi lista de tareas</h1>
      </header>
      <Form inputText={inputText} handleInputChange={handleInputChange} />
      <TodoList />
    </div>
  );
};

export default App;
