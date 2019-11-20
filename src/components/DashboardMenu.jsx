import React from "react";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link active" to="/dashboard/offers-made">
            Offers Made
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard/offers-received">
            Offers Received
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard/deals-agreed">
            Deals Agreed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
