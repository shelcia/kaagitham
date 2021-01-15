import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <div className="bg-auth">
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="row w-100">
            <div className="col-sm-5">
              <h1>n fn nvf nfmb nf nbf</h1>
            </div>
            <div className="col-sm-7">
              <div className="card border border-0 rounded-0 card-auth">
                <div className="card-body">
                  <h1 className="mb-5">Login</h1>
                  <form>
                    <div className="form-check border">
                      {/* <label className="form-check-label">Username</label> */}
                      <input
                        className="form-control"
                        type="text"
                        data-text="username"
                        // placeholder="enter your username"
                      />
                    </div>
                    <div className="form-check border">
                      {/* <label className="form-check-label">Password</label> */}
                      <input
                        className="form-control"
                        type="password"
                        data-text="password"
                        // placeholder="enter your password"
                      />
                    </div>
                    <div className="text-center mt-5">
                      <Link to={`/group/${Date.now()}`}>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Enter
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
