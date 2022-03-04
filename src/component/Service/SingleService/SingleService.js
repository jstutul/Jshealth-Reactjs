import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { id, name, details, image } = props.service;
  const url = `/service/${id}/`;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card h-100">
        <img src={image} className="card-img-top p-4" alt="Palm Springs Road" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details.slice(0, 120)}</p>
        </div>
        <div className="m-3">
          <Link to={url} className="btn btn-warning">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
