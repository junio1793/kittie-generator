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
    <div className="pt-32 pb-20 flex flex-col items-center justify-center text-center">
      {!mostrouGatos ? (
        <ButtonGetCat onClick={handleBuscarGatin} label="Gerar Gatinhos" />
      ) : (
        <button onClick={limpar}>
          <Delete />
        </button>
      )}

      {mostrouGatos && (
        <div
          onClick={limpar}
          style={{ backgroundColor: "#242424" }}
          className="fixed top-20 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-start z-50 p-4 overflow-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#242424" }}
            className=" p-6 rounded-md max-w-4xl max-h-[80vh] overflow-auto flex flex-wrap gap-4 justify-center border border-violet-950 border-l-rose-900"
          >
            {gatinhos?.map((gato, idx) => (
              <img
                key={idx}
                src={gato.url}
                alt="gatinho"
                className="w-32 h-32 rounded-md"
              />
            ))}
          </div>
        </div>
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
