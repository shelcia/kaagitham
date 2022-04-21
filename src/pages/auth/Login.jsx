import React, { useState } from "react";
import Footer from "../../components/templates/Footer";
import Topbar from "../../components/templates/Topbar";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
  },
  image: {
    backgroundImage:
      'url("https://ik.imagekit.io/shelcia/Kaagitham/businessman-signing-contract_U-YeqkrrV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650563764419")',
    backgroundRepeat: "no-repeat",
    backgroundColor: "#00000000",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  container: {
    backgroundColor: "#e1f5fe0",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();

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

    const body = {
      email: inputs.email,
      password: inputs.password,
    };
    axios
      .post(`${process.env.REACT_APP_REST_LOCAL_LINK}api/auth/login`, body)
      .then((res) => {
        console.log(res);
        localStorage.setItem("KG-id", res.data.id);
        localStorage.setItem("KG-name", res.data.name);
        localStorage.setItem("KG-token", res.data.token);

        navigate(`/user/${res.data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <section className="bg-auth">
        <Topbar />
        <div className="container" style={{ marginTop: "5rem" }}>
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              className={classes.container}
            >
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form className={classes.form} noValidate>
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
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="I have read this information"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
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
