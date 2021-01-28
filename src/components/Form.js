import React from "react";

const Form = ({
  inputText,
  handleInputChange,
  handleTask,
  handleSelectChange,
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
