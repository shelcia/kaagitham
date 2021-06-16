import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <React.Fragment>
      <div className="bg-auth">
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="row w-100">
            <div className="col-sm-5">
              <h1 className="text-light mb-5">Drafts Maker</h1>
              <ul className="list-group">
                <li>Instant Creation of Drafts Documents</li>
                <li>Share anywhere</li>
                <li>Live Editing</li>
                <li>No Limit on Content</li>
              </ul>
            </div>
            <div className="col-sm-7">
              <div className="card border border-0 rounded-0 card-auth">
                <div className="card-body">
                  <h1 className="mb-3">Signup</h1>
                  <form>
                    <div className="form-check mb-3 pl-0">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="enter your email"
                      />
                    </div>
                    <p>
                      P.S We won't be sending emails
                      <span role="img" aria-label="">
                        🤪🤪
                      </span>
                    </p>
                    <div className="form-check mb-3 pl-0">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="enter your password"
                      />
                    </div>
                    <div className="text-center mt-3">
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
                  <div className="text-center mt-3">
                    <Link to="/login">
                      Have an account already?? then Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
