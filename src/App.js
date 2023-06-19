import NeighborhoodApp from './components/NeighborhoodApp' 
import './App.css';

function App() {
  return (
    <>
    <header className="App-header">
      <div>
      <h3 className="App-title">
        Patterns of Impared Driving
      </h3>
      </div>
      <div>
      <h5>An interactive exploration of impaired accident data in Washington DC</h5>
      </div>
    </header>
    <div className="App">
      <NeighborhoodApp/>
    </div>
    </>
  );
}

export default App;
