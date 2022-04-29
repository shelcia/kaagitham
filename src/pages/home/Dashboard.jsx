import React, { useEffect, useState } from "react";
import DashboardTopbar from "../../components/templates/DashboardTopbar";
import { FiPlus } from "react-icons/fi";
import { apiDocument } from "../../services/api/models/DocumentModel";
import { useNavigate } from "react-router-dom";

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

  const cardClass = `card shadow-lg rounded-3 bg-dark border border-primaryColor d-flex justify-content-center align-items-center document-card mb-2 mx-auto`;

  return (
    <React.Fragment>
      <section className="bg-dashboard">
        <DashboardTopbar />
        <div className="container text-white" style={{ marginTop: "5rem" }}>
          <div className="row">
            <div className="col-sm-2">
              <div className={cardClass} onClick={createDoc}>
                <FiPlus size={20} />
              </div>
            </div>
            {documents.map((doc, index) => (
              <div
                className="col-sm-2"
                key={index}
                onClick={() => navigate(`/document/${doc}`)}
              >
                <div className={cardClass}>Document {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
