import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="button-app"
          href="fb://facewebmodal/f?href=https://www.facebook.com/ramonmoreno.1401"
        >
          Abrir aplicación
        </a>
      </header>
    </div>
  );
}

export default App;
