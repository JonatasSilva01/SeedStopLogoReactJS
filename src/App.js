import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(false);
  const speedClass = speed ? 'speed' : 'Stop';

  const [counter, setConter] = useState(0);

  const [btnStopColor, setBtnStopColor] = useState(false);
  const btnStopColorClass = btnStopColor ? 'StopColor' : ''

  const hendless = () => {
    setSpeed(!speed);
    setBtnStopColor(!btnStopColor);
    setConter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${speedClass}`} alt="logo" />
        {counter <= 0 ? null :  <h1>Apertei botão {counter} vezes </h1>}
        <button className={`${btnStopColorClass}`} type='button' onClick={hendless}>{speedClass}</button>
      </header>
    </div>
  );
}

export default App;
