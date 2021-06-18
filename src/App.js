import React from "react";

//ROUTER MODULES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardRoutes, HomeRoutes } from "./router";

//STYLES
import "./styles/style.css";
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
            {HomeRoutes.map((route) => (
              <Route
                exact
                path={route.routeLink}
                component={route.file}
                index={route.routeLink}
              />
            ))}

            {DashboardRoutes.map((route) => (
              <Route
                exact
                path={route.routeLink}
                component={route.file}
                index={route.routeLink}
              />
            ))}

            {/* <Route path="/user/:id" exact component={MainPage} />
            <Route path="/group/:id" exact component={Editor} /> */}
          </Switch>
        </Router>{" "}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
