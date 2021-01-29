import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "../stylesheets/App.scss";
import Form from "./Form";
import TodoList from "./TodoList";

const App = () => {
  //STATES
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tasksFilter, setTasksFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const inputRef = useRef(null);

  //USE EFFECT
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    handlerFilteredTasks();
    setLocalStorage();
    inputRef.current.focus();
  }, [tasks, tasksFilter]);

  //LOCAL STORAGE
  const setLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  //FUNCTIONS
  const handlerFilteredTasks = () => {
    switch (tasksFilter) {
      case "completed":
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  const handleInputChange = (input) => {
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

  const handleSelectChange = (select) => {
    setTasksFilter(select);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">What's the plan for today?</h1>
      </header>
      <main>
        <Form
          inputText={inputText}
          handleInputChange={handleInputChange}
          tasks={tasks}
          handleTask={handleTask}
          handleSelectChange={handleSelectChange}
          inputRef={inputRef}
        />
        <TodoList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
          filteredTasks={filteredTasks}
        />
      </main>
    </div>
  );
};

export default App;
