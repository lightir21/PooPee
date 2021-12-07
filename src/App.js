import React from "react";
import Dashboard from "./Dashboard";
import { Routes, Route, Link } from "react-router-dom";
import Poo from "./Poo";
import Feed from "./Feed";
import Pee from "./Pee";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="feed" element={<Feed />} />
        <Route path="poo" element={<Poo />} />
        <Route path="pee" element={<Pee />} />
      </Routes>
    </>
  );
};

export default App;
