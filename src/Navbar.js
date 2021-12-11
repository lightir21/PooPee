import React from "react";
import { FaPoo, FaBaby, FaCentercode } from "react-icons/fa";
import { GiBabyBottle } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = ({ setCurrPage }) => {
  return (
    <div className="container-center">
      <h3>What would you like to track?</h3>
      <div className="icons-container">
        <Link to="/poo" className="poo item" onClick={() => setCurrPage("poo")}>
          <FaPoo />
          <span className="text">poo</span>
        </Link>
        <Link to="/pee" className="pee item" onClick={() => setCurrPage("pee")}>
          <FaBaby />
          <span className="text">pee</span>
        </Link>
        <Link
          to="/feed"
          className="feed item"
          onClick={() => setCurrPage("feed")}
        >
          <GiBabyBottle />
          <span className="text">feed</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
