import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Landing from "./Landing";
import ItemList from "./ItemList";
import Register from "./Register";
import Login from "./Login";
import AddItem from "./AddItem.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {/* <div className="container"> */}
          <Route path="/item-list">
            <ItemList />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="add-item">
            <AddItem />
          </Route>
          {/* </div> */}
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
