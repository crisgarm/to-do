import React from "react";

const Todo = ({ text, id, handleDeleteTask }) => {
  const deleteTask = () => {
    handleDeleteTask(id);
  };

  return (
    <div>
      <p>{text}</p>
      <button>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTask}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
