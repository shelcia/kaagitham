import React, { useEffect, useState } from "react";
import DashboardTopbar from "../../components/templates/DashboardTopbar";
import { FiPlus } from "react-icons/fi";
import { apiDocument } from "../../services/api/models/DocumentModel";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const createDoc = () => {
    const id = localStorage.getItem("KG-id");

    apiDocument.post({ id }).then((res) => {
      navigate(`/document/${res.message.id}`);
    });
  };

  const id = localStorage.getItem("KG-id");

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    apiDocument.getSingle(id, ac.signal, `user`).then((res) => {
      setDocuments(res.message.documents);
    });
  }, [id]);

  return (
    <React.Fragment>
      <section className="bg-dashboard">
        <DashboardTopbar />
        <div className="container text-white" style={{ marginTop: "5rem" }}>
          <div className="row">
            <div className="col-sm-2 d-flex">
              <div className="card p-5 bg-dark" onClick={createDoc}>
                <FiPlus />
              </div>
            </div>
            <div className="col-sm-10 d-flex">
              {documents.map((doc, index) => (
                <Link to={`/document/${doc}`} key={index}>
                  <div className="card p-5 bg-dark ml-3">
                    Document {index + 1}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
