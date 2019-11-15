import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
