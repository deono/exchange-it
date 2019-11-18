import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import ItemList from "./ItemList";
import Register from "./Register";
import Login from "./Login";
import AddItem from "./AddItem.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <div className="container">
        <ItemList />
        <Register />
        <Login />
        <AddItem />
      </div>
    </div>
  );
}

export default App;
