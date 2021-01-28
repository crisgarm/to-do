import React from "react";
import Todo from "./Todo";

const TodoList = ({
  tasks,
  handleDeleteTask,
  handleCompletedTask,
  filteredTasks,
}) => {
  const todoItem = filteredTasks.map((task) => {
    return (
      <li key={task.id} className="todoList__item">
        <Todo
          text={task.text}
          id={task.id}
          completed={task.completed}
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
        />
      </li>
    );
  });
  return <ul className="todoList">{todoItem}</ul>;
};

export default TodoList;
