import React from "react";

const Todo = ({ text, id, handleDeleteTask, handleCompletedTask }) => {
  const deleteTask = () => {
    handleDeleteTask(id);
  };

  const completedTask = () => {
    handleCompletedTask(id);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={completedTask}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
