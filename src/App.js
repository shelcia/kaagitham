import React from "react";
import "./styles/style.css";
import Editor from "./components/editor/Editor";
import Login from "./pages/auth/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/editor/MainPage";
import Signup from "./pages/auth/Signup";
import Home from "./pages/auth/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/user/:id" exact component={MainPage} />
            <Route path="/group/:id" exact component={Editor} />
          </Switch>
        </Router>{" "}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
