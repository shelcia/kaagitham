import React from "react";
import Footer from "../../components/templates/Footer";
import Topbar from "../../components/templates/Topbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Grid,
  Typography,
  CssBaseline,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
  },
  image: {
    backgroundImage:
      'url("https://cdn.discordapp.com/attachments/795010536365752320/854981273080561664/businessman-signing-contract.png")',
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
  //   const card_classes = useCardStyles();

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
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
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
                  >
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Have an account already? Login"}
                      </Link>
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
