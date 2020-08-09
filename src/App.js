import React ,{useState} from 'react';
import './App.css';
import KeyPad from './keypad.js'
import Result from './result'
function App() {
  const [result,setResult] = useState('')
  const onClickHandler = (a) => {
    if(a === "="){
      calculate()
    }
    else if(a === 'C'){
    reset()
    }
    else if(a === 'CE'){
      backSpace()
    }
    else{
    setResult(result+a)
    }
  }
  const calculate = () => {
    
    try{
      var a =eval(result)
       setResult(a)
    }
    catch{
      setResult("error")
    }
  }
  const reset = () => {
    setResult('')
  }
  const backSpace = () => {
    try{
    setResult(result.slice(0,-1))
    }
    catch{
      setResult("error")
    }
  }
  return (
    <div className="main">
      <div className="calBody">
      <div>
        <Result result = {result} />
        <KeyPad onClickHandler = {onClickHandler} />
      </div>
      </div>
    </div>
  );
}

export default App;
