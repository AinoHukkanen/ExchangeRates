import './App.css';
import {useState} from 'react';
import axios from 'axios';

const URL = 'https://api.exchangerate.host/latest';


function App(){
  const [eur, setEur] = useState(0);
  const [gbp, setGBP] = useState(0);
  const [rate,setRate] = useState(0);


async function convert(e) {
  e.preventDefault();
  try {
    const address = URL;
    const response = await fetch(address);

    if (response.ok) {
      const json = await response.json();
      setRate(json.rates.GBP);
      setGBP(eur * json.rates.GBP);

    }
    else {
      alert('Error retrieving exchange rate.');
      
    }
   } catch(err){
      alert(err);
    }
  }


return (
  <div id="container">
    <p>Currency calculator - euros to pounds! </p>
  <form id="lomake" onSubmit={convert}>
  <div>
    <label id="eur">EUR </label>&nbsp;
    <input type="number" step="0.01"
    value={eur} onChange={e=> setEur(e.target.value)}/>
    <output>{rate}</output>
  </div>
  <div>
  <label id="gbp">GBP </label>
  <output>{gbp.toFixed(2)} €</output>
    </div>
    <div>
    <button id="button">Calculate</button>
    </div>
  </form>
  </div>
);

}

export default App;
