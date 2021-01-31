import React from "react";
import Login from "./Login";

const isLoggedin = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working</h1>}
      {isLoggedin ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
