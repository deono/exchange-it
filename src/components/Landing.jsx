import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4 text-warning">Exchange It!</h1>
        <p className="lead">Exchange your pre loved items for something new</p>
        <Link className="btn btn-warning btn-lg" to="/item-list" role="button">
          View items
        </Link>
      </div>
    </div>
  );
};

export default Landing;
