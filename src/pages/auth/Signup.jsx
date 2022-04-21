import React, { useState } from "react";
import Footer from "../../components/templates/Footer";
import Topbar from "../../components/templates/Topbar";
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
import { Link as RouteLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
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

const Signup = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.table(inputs);

    const body = user;
    console.log(body);
    axios
      .post(`${process.env.REACT_APP_REST_LOCAL_LINK}api/auth/register`, body)
      .then((res) => {
        console.log(res);
        toast.success("successfully created account. Now please Login");

        navigate(`/login`);
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
                  Sign up
                </Typography>
                <form className={classes.form} noValidate>
                  <TextField
                    value={user.name}
                    onChange={handleInputs}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                  <TextField
                    value={user.email}
                    onChange={handleInputs}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    value={user.password}
                    onChange={handleInputs}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
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
                    onClick={onSubmit}
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <RouteLink to="/login">
                        {"Have an account already? Login"}
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

export default Signup;
