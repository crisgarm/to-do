import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/App.scss";
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

  const handleCompletedTask = (taskId) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Things to do</h1>
      </header>
      <main>
        <Form
          inputText={inputText}
          handleInputChange={handleInputChange}
          tasks={tasks}
          handleTask={handleTask}
        />
        <TodoList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
        />
      </main>
    </div>
  );
};

export default App;
