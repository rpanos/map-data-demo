import NeighborhoodApp from './components/NeighborhoodApp' 
import './App.css';

function App() {
  return (
    <>
    <header className="App-header">
      <h2>An interacive exploration of impaired accident data in Washington DC</h2>
    </header>
    <div className="App">
      <NeighborhoodApp/>
    </div>
    </>
  );
}

export default App;
