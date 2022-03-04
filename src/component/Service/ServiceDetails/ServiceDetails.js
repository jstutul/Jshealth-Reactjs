import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../hooks/useService";
import spinner from "../spinner.gif";
const ServiceDetails = () => {
  let { id } = useParams();
  const [services] = useProducts();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    services.map((service) => {
      if (service.id === parseInt(id)) {
        setSingleService(service);
      }
      return service;
    });
  }, [id, services]);

  return (
    <>
      {singleService.name ? (
        <div className="row mb-2" style={{ marginTop: "7%" }}>
          <div className="col-lg-4 p-4">
            <img className="img-fluid" src={singleService.image} alt="Card" />
          </div>
          <div className="col-lg-8 px-2">
            <h4 className="card-title">
              <strong>{singleService.name}</strong>
            </h4>
            <h6 className="font-weight-bold indigo-text py-2">
              -------------------------
            </h6>
            <p className="card-text">{singleService.details}</p>
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "7%", marginBottom: "10%" }}
        >
          <img src={spinner} alt="" />
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
