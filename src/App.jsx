import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(10);
  // let counter=15;
  const addValue=()=>{
    // console.log("clicked",counter);
    // counter=counter+1;
    if(counter<20){
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
    setCounter(prevCounter=> prevCounter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
    <h1>tea and react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>

    </>
  )
}
export default App;
