import React from "react";
import DashboardTopbar from "../../components/templates/DashboardTopbar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <section className="bg-dashboard">
        <DashboardTopbar />
        <div className="container text-white" style={{ marginTop: "5rem" }}>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-8"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
