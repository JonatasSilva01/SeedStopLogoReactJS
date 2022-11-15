import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [speed, setSpeed] = useState(true);
  const speedClass = speed ? 'speed' : 'Stop';

  const [btnStopColor, setBtnStopColor] = useState(false);
  const btnStopColorClass = btnStopColor ? 'StopColor' : '';

  const [textColorRed, setColorRed] = useState(false);
  const textColorRedClass = textColorRed ? 'text-red' : 'text-white';
  
  const [counter, setConter] = useState(0);

  const hendless = () => {
    setSpeed(!speed);
    setBtnStopColor((btnColor) => !btnColor);
    setConter((counter) => counter + 1);
    setColorRed(!textColorRed);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className={`${textColorRedClass}`}>Speener React Js</h2>
        <img src={logo} className={`App-logo ${speedClass}`} alt="logo" />
        {counter <= 0 ? null :  <h1>Apertei botão {counter} vezes </h1>}
        <button className={`${btnStopColorClass}`} type='button' onClick={hendless}>{speedClass}</button>
      </header>
    </div>
  );
}

export default App;
