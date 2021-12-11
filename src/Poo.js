import React from "react";
import { useState } from "react";
import Form from "./Form";

function Poo({
  poo,
  setPoo,
  date,
  setDate,
  description,
  setDescription,
  time,
  setTime,
  isActive,
  setIsActive,
  currPage,
  setCurrPage,
}) {
  const handleSubmit = () => {};

  return (
    <>
      <article className="container-pages">
        <Form
          isActive={isActive}
          setIsActive={setIsActive}
          currPage={currPage}
          setCurrPage={setCurrPage}
          setPoo={setPoo}
          setDate={setDate}
          setDescription={setDescription}
          date={date}
          time={time}
          setTime={setTime}
          description={description}
        />
      </article>
      {poo.map((item, index) => {
        const { _, date, time, description } = item;
        return (
          <p>
            {index + 1}: {date} at {time}{" "}
            {description ? `additional info: ${description}` : ""}
          </p>
        );
      })}
    </>
  );
}

export default Poo;
