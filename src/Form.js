import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="form-container">
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" />
      </div>
      <div>
        <label htmlFor="time">Time: </label>
        <input type="time" name="time" id="time" />
      </div>
      <div>
        <label htmlFor="description">Description (optional): </label>
        <input type="text" name="description" id="description" />
      </div>
    </form>
  );
};
