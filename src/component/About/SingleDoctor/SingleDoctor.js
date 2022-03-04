import React from "react";

const SingleDoctor = (props) => {
  const { name, image, degisnation } = props.doctor;
  return (
    <div className="card col-lg-4 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img
          src={image}
          className="rounded-circle z-depth-1"
          alt="Sample avatar"
        />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">{name}</h5>
      <p className="text-uppercase blue-text">
        <strong>{degisnation}</strong>
      </p>
    </div>
  );
};

export default SingleDoctor;
