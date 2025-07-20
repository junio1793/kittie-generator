import { useState } from "react";

function FetchCatRequest() {
  const [gatinhos, setGatinhos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarGatin = async () => {
    setLoading(true);
    setErro(null);

    try {
      const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY",
      });

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const result = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10",
        requestOptions
      );

      const response = await result.json();
      setGatinhos(response);
    } catch (errr) {
      console.log(errr);
      setErro(errr);
    } finally {
      setLoading(false);
      console.log("chegou aqui");
    }
  };

  const limparGatinhos = () => {
    setGatinhos(null);
    setErro(null);
  };

  return { gatinhos, loading, erro, buscarGatin, limparGatinhos };
}

export default FetchCatRequest;
