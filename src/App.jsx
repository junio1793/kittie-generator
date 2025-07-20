import "./App.css";
import GetCats from "./components/GetCats";

function App() {
  return (
    <div>
      <img
        src="https://64.media.tumblr.com/tumblr_lw2190wOi41r5qrimo1_400.gif"
        alt="Carregando..."
        className="w-60  h-55 rounded-full
        "
      />
      <div>
        <GetCats />
      </div>
    </div>
  );
}

export default App;
