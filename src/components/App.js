import "../styles/app.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header" />
        <nav className="navbar">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Properties} />
            <Route exact path="/add-property" component={AddProperty} />
          </Switch>
        </nav>
      </div>
    </Router>
  );
};

export default App;
