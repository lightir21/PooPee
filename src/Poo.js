import React from "react";
import { useState } from "react";

function Poo() {
  const [poo, setPoo] = useState([]);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = () => {};

  return (
    <>
      <article className="container-pages">
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
      </article>
      {poo.map((item) => {})}
    </>
  );
}

export default Poo;
