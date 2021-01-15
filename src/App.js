import React from "react";
import "./styles/style.css";
import Editor from "./components/editor/Editor";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/editor/MainPage";
import Signup from "./components/auth/Signup";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/user/:id" exact component={MainPage} />
          <Route path="/group/:id" exact component={Editor} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
