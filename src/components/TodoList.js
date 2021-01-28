import React from "react";
import Todo from "./Todo";

const TodoList = ({ tasks, handleDeleteTask, handleCompletedTask }) => {
  const todoItem = tasks.map((task) => {
    return (
      <li key={task.id}>
        <Todo
          text={task.text}
          id={task.id}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
        />
      </li>
    );
  });
  return <ul className="todo__list">{todoItem}</ul>;
};

export default TodoList;
