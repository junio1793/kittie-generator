import "./App.css";
import GetCats from "./components/GetCats";

function App() {
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full shadow-md z-50 p-4"
        style={{ backgroundColor: "#242424" }}
      >
        <h1 className="text-3xl font-bold text-center">Cats Gallery 🐱</h1>
      </header>

      <main className="pt-20 p-4">
        <img
          src="https://64.media.tumblr.com/tumblr_lw2190wOi41r5qrimo1_400.gif"
          alt="Carregando..."
          className="w-60 h-55 rounded-full mx-auto mb-6"
        />
        <GetCats />
      </main>
    </>
  );
}

export default App;
