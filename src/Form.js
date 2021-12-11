import React from "react";

const Form = ({
  isActive,
  setIsActive,
  time,
  setTime,
  date,
  setDate,
  description,
  setDescription,
  setPoo,
  currPage,
}) => {
  if (isActive) {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (currPage === "poo") {
        if (date && time) {
          const event = {
            id: new Date().getTime().toString(),
            date,
            time,
            description,
          };
          setPoo((poo) => {
            return [...poo, event];
          });
        }
      }
    };

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description (optional): </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
    );
  } else {
    return <button onClick={() => setIsActive(true)}>Add Event</button>;
  }
};

export default Form;
