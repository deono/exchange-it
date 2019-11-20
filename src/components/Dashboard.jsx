import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import DashboardMenu from "./DashboardMenu";
import OffersMade from "./OffersMade";
import OffersReceived from "./OffersReceived";
import DealsAgreed from "./DealsAgreed";

const routes = [
  {
    path: "/dashboard/offers-made",
    component: () => <OffersMade />
  },
  {
    path: "/dashboard/offers-received",
    component: () => <OffersReceived />
  },
  {
    path: "/dashboard/deals-agreed",
    component: () => <DealsAgreed />
  }
];

const Dashboard = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="d-1 text-warning text-center">Dashboard</h1>
        <Profile />
        <div className="card">
          <div className="row no-gutters">
            <div className="col-12 col-md-3 bg-light">
              <DashboardMenu />
            </div>
            <div className="col-12 col-md-9">
              <div className="card-body">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.component />}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
