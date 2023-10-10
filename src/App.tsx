import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidenav from "./components/Sidenav";

function App(): JSX.Element {
  return (
    <div>
      <div className="container">
        <Sidenav />
      </div>
    </div>
  );
}

export default App;
