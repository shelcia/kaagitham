import React from "react";

//ROUTER MODULES
import { useRoutes } from "react-router-dom";

//STYLES
import "./styles/boostrap.css";
import "./styles/style.css";
import routes from "./router";
import { blue } from "@mui/material/colors";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: blue,
    },
  });

  const allPages = useRoutes(routes);

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Andika New Basic', sans-serif",
    },
  };

  return (
    <React.Fragment>
      <Toaster toastOptions={toasterOptions} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {allPages}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
