import React from "react";

const Form = ({
  inputText,
  handleInputChange,
  handleTask,
  handleSelectChange,
  inputRef,
}) => {
  const inputChange = (ev) => {
    handleInputChange(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleTask();
  };

  const handleChange = (ev) => {
    handleSelectChange(ev.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          className="form__input"
          placeholder="Enter a new task!"
          value={inputText}
          onChange={inputChange}
          ref={inputRef}
        />
        <button
          className="form__button"
          disabled={inputText === "" ? true : false}
          type="submit"
        >
          Add
        </button>
      </div>
      <div className="form__selectContainer">
        <select onChange={handleChange} className="form__select">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
