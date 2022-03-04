import { useEffect, useState } from "react";

const useClient = () => {
  const [clientSay, setClientSay] = useState([]);
  useEffect(() => {
    fetch("https://jshealth.jstutul.xyz/api/api-clientsay/")
      .then((res) => res.json())
      .then((data) => setClientSay(data));
  }, []);
  return [clientSay];
};

export default useClient;
