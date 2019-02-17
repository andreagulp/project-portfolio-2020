import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/current_user")
      // .then(response => console.log(response));
      .then(response => setActiveUser(response.data.name));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {!activeUser ? (
            <a className="App-link" href="/auth/google">
              Sign in
            </a>
          ) : (
            <a className="App-link" href="/api/logout">
              Log Out
            </a>
          )}
        </div>
        <a
          className="App-link"
          href="/api/current_user"
          target="_blank"
          rel="noopener noreferrer"
        >
          Current User - {activeUser}
        </a>
      </header>
    </div>
  );
};

export default App;
