import React from "react";
import "./styles/style.css";
import Editor from "./components/Editor";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/group/:id" exact component={Editor} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
