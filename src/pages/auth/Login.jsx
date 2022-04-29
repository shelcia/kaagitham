import React, { useState } from "react";
import Footer from "../../components/templates/Footer";
import Topbar from "../../components/templates/Topbar";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  Button,
  // Checkbox,
  CssBaseline,
  // FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { apiAuth } from "../../services/api/models/AuthModel";
import toast from "react-hot-toast";

const Login = () => {
  const theme = useTheme();

  const gridImgStyle = {
    backgroundImage:
      'url("https://ik.imagekit.io/shelcia/Kaagitham/businessman-signing-contract_U-YeqkrrV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650563764419")',
    backgroundRepeat: "no-repeat",
    backgroundColor: "#00000000",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  const gridContainerStyle = {
    backgroundColor: "#e1f5fe0",
  };

  const gridPaperStyle = {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const formStyle = {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  };

  const submitStyle = {
    margin: theme.spacing(3, 0, 2),
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.table(inputs);
    toast("Signing up!", {
      icon: "⌛",
      duration: 1000,
    });

    const body = {
      email: inputs.email,
      password: inputs.password,
    };
    apiAuth.post(body, "login").then((res) => {
      console.log(res);
      if (res.status === "200") {
        localStorage.setItem("KG-id", res.message.id);
        localStorage.setItem("KG-name", res.message.name);
        localStorage.setItem("KG-token", res.message.token);
        navigate(`/user/${res.message.id}`);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <React.Fragment>
      <section className="bg-auth">
        <Topbar />
        <div className="container" style={{ marginTop: "5rem" }}>
          <Grid container component="main" sx={{ height: "70vh" }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} style={gridImgStyle} />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              style={gridContainerStyle}
            >
              <div style={gridPaperStyle}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form style={formStyle} noValidate>
                  <TextField
                    value={inputs.email}
                    onChange={handleInputs}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    size="small"
                  />
                  <TextField
                    value={inputs.password}
                    onChange={handleInputs}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                  />
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="I have read this information"
                  /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={submitStyle}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onSubmit(e);
                    }}
                    onClick={(e) => onSubmit(e)}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <RouteLink to="#">Forgot password?</RouteLink>
                    </Grid>
                    <Grid item>
                      <RouteLink to="/signup">
                        {"Don't have an account? Sign Up"}
                      </RouteLink>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
