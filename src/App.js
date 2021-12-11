import React from "react";
import Dashboard from "./Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import Poo from "./Poo";
import Feed from "./Feed";
import Pee from "./Pee";
import Navbar from "./Navbar";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [poo, setPoo] = useState("");
  const [pee, setPee] = useState("");
  const [feed, setFeed] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="feed" element={<Feed />} />
        <Route path="poo" element={<Poo poo={poo} setPoo={setPoo} />} />
        <Route path="pee" element={<Pee />} />
      </Routes>
    </>
  );
};

export default App;
