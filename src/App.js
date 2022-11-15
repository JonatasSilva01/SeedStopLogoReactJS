import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(false);
  const speedClass = speed ? 'speed' : 'Stop';

  const [btnStopColor, setBtnStopColor] = useState(false);
  const btnStopColorClass = btnStopColor ? 'StopColor' : ''

  const hendless = () => {
    setSpeed(!speed);
    setBtnStopColor(!btnStopColor);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${speedClass}`} alt="logo" />
        <button className={`${btnStopColorClass}`} type='button' onClick={hendless}>{speedClass}</button>
      </header>
    </div>
  );
}

export default App;
