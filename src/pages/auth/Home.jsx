import React from "react";
import { FeaturesContent } from "../../components/content/Features";
import Topbar from "../../components/templates/Topbar";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Footer from "../../components/templates/Footer";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <React.Fragment>
      <section className="bg-auth">
        <Topbar />

        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          style={{ marginTop: "5rem" }}
        >
          <h1 className="title mt-3" style={{ fontWeight: "700" }}>
            Collaborate from anywhere to create drafts*
          </h1>
          <p className="text-white mt-3">
            Kaagitham helps you create draft which can be shared across easily.*
          </p>
          <div className="row my-5">
            {FeaturesContent.map((feature, index) => (
              <div className="col-lg-3 mb-3" key={index}>
                <div className="feature-card shadow-lg p-3 rounded-lg mx-auto">
                  {feature.icon}
                  <p>{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button color="primary" variant="contained" size="large">
                Signup <HiOutlineArrowNarrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
