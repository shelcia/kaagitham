import React from "react";

//ROUTER MODULES
import { useRoutes } from "react-router-dom";

//STYLES
import "./styles/style.css";
import routes from "./router";
import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: blue,
    },
  });

  const allPages = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>{allPages}</ThemeProvider>
    </React.Fragment>
  );
};

export default App;
