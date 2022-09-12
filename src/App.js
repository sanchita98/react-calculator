import './App.css';
import React, {useState} from 'react'

function App() {
  const [result, setResult] = useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{
     setResult("");
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
 
  return (
  <>
    <h1> 📅 REACT CALCULATOR 📅 </h1>
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="0" className="button" onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button" onClick={clickHandler}/>
      <input type="button" value="/" className="button" onClick={clickHandler}/>
      <input type="button" value="%" className="button" onClick={clickHandler}/>
      <input type="button" value="Clear" className="button1" onClick={clearDisplay}/>
      <input type="button" value="=" className="button1" onClick={calculate}/>
    </div>
    </>
  );
}

export default App;
