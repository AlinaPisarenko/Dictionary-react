import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="quote">
          “The difference between the almost right <br />
          word and the right word is really a large matter. <br />
          ’tis the difference between the lightning bug and the lightning.”{" "}
          <br />― Mark Twain
        </p>
      </header>
      <Dictionary defaultWord="Welcome" />
      <footer className="App-footer">
        This project was coded by Alina Pisarenko and is{" "}
        <a
          href="https://github.com/AlinaPisarenko/Dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
