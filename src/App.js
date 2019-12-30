import React from "react";
import AddItem from "./components/addItem";
import List from "./components/list"
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddItem />
      <List />
    </div>
  );
}

export default App;
