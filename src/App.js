import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Dictionary />
      <footer className="App-footer">Codded by Alina Pisarenko</footer>
    </div>
  );
}

export default App;
