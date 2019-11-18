import React from "react";
import Profile from "./Profile";
import DashboardMenu from "./DashboardMenu";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="d-1 text-warning text-center">Dashboard</h1>
      <Profile />
      <div className="row">
        <div className="col-12 col-md-3">
          <DashboardMenu />
        </div>
        <div className="col-12 col-md-9"></div>
      </div>
    </div>
  );
};

export default Dashboard;
