import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="vulture" />
        </main>
        <br />
        <br />
        <footer className="App-footer">
          Coded by Izzy and this code is{" "}
          <a
            href="https://github.com/irobinsongit/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
