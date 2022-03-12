import './App.css';
import SolunarData from './components/SolunarData';
import input from './input.json';

function App() {
  console.log('input: ', input);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Solunar API</h1>
        <SolunarData lat={input.lat} lon={input.lon} date={input.date} utcOffset={input.utcOffset} />
      </header>
      <footer className="App-footer">
        <p>Solunar data provided by <a href="https://solunar.org/">solunar.org</a></p>
      </footer>
    </div>
  );
}

export default App;
