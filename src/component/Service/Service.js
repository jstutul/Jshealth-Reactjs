import React from "react";
import useProducts from "../../hooks/useService";
import SingleService from "./SingleService/SingleService";

const Service = () => {
  const [services] = useProducts();
  return (
    <main>
      <div className="container my-5 py-5">
        <section>
          <h2 className="border-bottom text-center py-2">Services</h2>
          <div className="row g-4 my-2">
            {services.map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Service;
