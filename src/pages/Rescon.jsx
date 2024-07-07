import React from "react";
import { Link } from "react-router-dom";
import "./res.css";

const Rescon = ({ resume }) => {
  return (
    <div className="rescon">
      <Link to={`/dash/${resume.attributes.resumeid}/edit`}>
        <h1>{resume.attributes.title}</h1>
      </Link>
    </div>
  );
};

export default Rescon;
