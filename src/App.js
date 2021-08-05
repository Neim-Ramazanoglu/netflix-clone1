import Logo from "./components/Netflix/Netflix-logo";
import Content from "./components/Content/Content";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.scss";
import Diziler from "./components/Diziler/Diziler";
import Filmler from "./components/Filmler/Filmler";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Logo />
        <Link class="links" to="/home">
          Ana Sayfa
        </Link>
        <Link class="links" to="/diziler">
          Diziler
        </Link>
        <Link class="links" to="/filmler">
          Filmler
        </Link>

        <Switch>
          <Route path="/diziler" component={Diziler} />
          <Route path="/filmler" component={Filmler} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
