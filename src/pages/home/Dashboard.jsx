import React from "react";
import DashboardTopbar from "../../components/templates/DashboardTopbar";
import { FiPlus } from "react-icons/fi";
import { apiDocument } from "../../services/api/models/DocumentModel";
import { useHistory } from "react-router-dom";
// const { v4: uuidv4 } = require('uuid');

const Dashboard = () => {
  const history = useHistory();

  const createDoc = () => {
    const id = localStorage.getItem("KG-id");

    apiDocument.post({ id }).then((res) => {
      history.push(`/document/${res.message.id}`);
    });
  };

  return (
    <React.Fragment>
      <section className="bg-dashboard">
        <DashboardTopbar />
        <div className="container text-white" style={{ marginTop: "5rem" }}>
          <div className="row">
            <div className="col-sm-4 d-flex">
              <div className="card p-5 bg-dark" onClick={createDoc}>
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
