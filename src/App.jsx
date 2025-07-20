import "./App.css";
import GetCats from "./components/GetCats";
import { Github } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className="fixed top-0 left-0 w-full shadow-md z-50 p-4"
        style={{ backgroundColor: "#242424" }}
      >
        <h1 className="text-3xl font-bold text-center">Cats Gallery 🐱</h1>
      </header>

      <main className="pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <img
          src="https://64.media.tumblr.com/tumblr_lw2190wOi41r5qrimo1_400.gif"
          alt="Carregando..."
          className="w-60 h-55 rounded-full mx-auto mb-6"
        />
        <GetCats />
      </main>

      <footer
        className="fixed bottom-0 left-0 w-full p-4 text-white flex justify-center z-50"
        style={{ backgroundColor: "#242424" }}
      >
        <a
          href="https://github.com/junio1793/kittie-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition"
        >
          <Github size={32} />
        </a>
      </footer>
    </div>
  );
}

export default App;
