import React from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
