import React from "react";

const Form = (props) => {
  const handleInputChange = (ev) => {
    props.handleInputChange(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form__input"
        value={props.inputText}
        onChange={handleInputChange}
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
