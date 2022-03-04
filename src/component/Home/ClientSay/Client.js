import React from "react";

const Client = (props) => {
  const { name, degisnation, image } = props.client;
  return (
    <div className="col-lg-4 col-md-4 mb-md-0 mb-4">
      <div className="card testimonial-card">
        <div className="card-up blue-gradient"></div>
        <div className="avatar mx-auto white">
          <img
            src={image}
            style={{ height: "300px" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="font-weight-bold mb-4">
            {name}
          </h4>
          <hr />
          <p className="dark-grey-text mt-4">{degisnation}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
