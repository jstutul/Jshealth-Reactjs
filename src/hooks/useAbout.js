import { useEffect, useState } from "react";

const useAbout = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch("https://jshealth.jstutul.xyz/api/api-aboutus/")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);
  return { about };
};

export default useAbout;
