import React from "react";
import DashboardTopbar from "../../components/templates/DashboardTopbar";
import { FiPlus } from "react-icons/fi";

const Dashboard = () => {
  return (
    <React.Fragment>
      <section className="bg-dashboard">
        <DashboardTopbar />
        <div className="container text-white" style={{ marginTop: "5rem" }}>
          <div className="row">
            <div className="col-sm-4 d-flex">
              <div className="card p-5 bg-dark">
                <FiPlus />
              </div>
              <div className="card p-5 bg-dark ml-3">hi</div>
            </div>
            <div className="col-sm-8"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
