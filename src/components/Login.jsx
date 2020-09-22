import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <h5>Login</h5>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="enter your username"
        />
        <input
          className="form-control"
          type="password"
          placeholder="enter your password"
        />
        <Link to={`/group/${Date.now()}`}>
          <button type="button" className="btn btn-primary">
            Enter
          </button>
        </Link>
      </form>
    </React.Fragment>
  );
};

export default Login;
