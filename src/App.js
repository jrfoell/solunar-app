import './App.css';
import SolunarData from './components/SolunarData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Solunar API</h1>
        <SolunarData />
      </header>
      <footer className="App-footer">
        <p>Solunar data provided by <a href="https://solunar.org/">solunar.org</a></p>
      </footer>
    </div>
  );
}

export default App;
