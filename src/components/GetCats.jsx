import ButtonGetCat from "./ButtonGetCat";
import FetchCatRequest from "../hooks/FetchCatRequest";
import { useState } from "react";
import { Delete } from "lucide-react";

function GetCats() {
  const { gatinhos, loading, buscarGatin, limparGatinhos } = FetchCatRequest();
  const [mostrouGatos, setMostrouGatos] = useState(false);

  const handleBuscarGatin = async () => {
    await buscarGatin();
    setMostrouGatos(true);
  };

  const limpar = () => {
    setMostrouGatos(false);
    limparGatinhos();
  };

  return (
    <div className="flex items-center w-full h-50">
      <div className="flex flex-wrap gap-4 justify-center mt-4 px-7 py-10">
        {gatinhos?.map((gato, idx) => (
          <img
            key={idx}
            src={gato.url}
            alt="gatinho"
            className="w-32 h-32 rounded-md"
          />
        ))}
      </div>

      {!mostrouGatos ? (
        <ButtonGetCat onClick={handleBuscarGatin} label="Gerar Gatinhos" />
      ) : (
        <button onClick={limpar}>
          <Delete />
        </button>
      )}

      {loading && (
        <img
          src="https://media.tenor.com/KEzW7ALwfUAAAAAM/cat-what.gif"
          alt="Carregando..."
          className="w-32 h-32 rounded-full"
        />
      )}
    </div>
  );
}

export default GetCats;
