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
  useTheme,
} from "@mui/material";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiAuth } from "../../services/api/models/AuthModel";

const Signup = () => {
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

    const body = user;
    // console.log(body);
    apiAuth.post(body, "register").then((res) => {
      console.log(res);
      if (res.status === "200") {
        toast.success("Successfully created account. ");
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
                  Sign up
                </Typography>
                <form style={formStyle} noValidate>
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
                    size="small"
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
                    size="small"
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
                    size="small"
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
                    style={submitStyle}
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
