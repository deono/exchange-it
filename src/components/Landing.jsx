import React from "react";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Exchange It!</h1>
        <p className="lead">Exchange your pre loved items for something new</p>
        <a className="btn btn-primary btn-lg" href="/item-list" role="button">
          View items
        </a>
      </div>
    </div>
  );
};

export default Landing;
