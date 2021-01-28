import React from "react";

const Form = ({ inputText, handleInputChange, handleTask }) => {
  const inputChange = (ev) => {
    handleInputChange(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleTask();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input"
        value={inputText}
        onChange={inputChange}
      />
      <button className="form__button" type="submit">
        Add
      </button>
      <div className="form__selectContainer">
        <select className="form__select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
