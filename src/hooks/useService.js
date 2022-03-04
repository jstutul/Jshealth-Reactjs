import { useState, useEffect } from "react";

const useProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://jshealth.jstutul.xyz/api/api-services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useProducts;
