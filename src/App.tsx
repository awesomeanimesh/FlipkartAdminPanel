import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar'; // Ensure the correct import name
import Sidenav from './components/Sidenav'; // Ensure the correct import name
import Home from './pages/Home/Home'; // Ensure the correct import name
import About from './pages/About'; // Ensure the correct import name

function App(): JSX.Element {
  return (

    <div>
      {/* <ResponsiveAppBar /> */}
      <div className="container">
        <Sidenav />

      </div>
    </div>

  );
}

export default App;
