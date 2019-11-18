import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import ItemList from "./ItemList";
import Register from "./Register";
import Login from "./Login";
import AddItem from "./AddItem.jsx";
import Dashboard from "./Dashboard";
// import Footer from "./Footer";
import ItemView from "./ItemView";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/item-list">
            <ItemList />
          </Route>
          <Route path="/add-item">
            <AddItem />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/item-view">
            <ItemView />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
