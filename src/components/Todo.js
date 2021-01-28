import React from "react";

const Todo = ({
  text,
  id,
  completed,
  handleDeleteTask,
  handleCompletedTask,
}) => {
  const deleteTask = () => {
    handleDeleteTask(id);
  };

  const completedTask = () => {
    handleCompletedTask(id);
  };

  return (
    <>
      <p className={`todoList__item-text ${completed ? "completed" : ""}`}>
        {text}
      </p>
      <div className="todoList__item-container">
        <button className="todoList__item-btnCheck" onClick={completedTask}>
          <i className="fas fa-check"></i>
        </button>
        <button className="todoList__item-btnTrash" onClick={deleteTask}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;
