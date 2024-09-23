import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter ,setcounter]=useState(0)
    // let counter =15
  const addvalue = ()=>{
    console.log(counter);
    counter =counter+1;
    setcounter(counter)
  }
  const deletecouter = ()=>{
    console.log(counter);
    
    setcounter(counter-1)
  }
   
  return(
    <>
    <h1>apex coder</h1>
    <h2>couter value{counter}</h2>
    <button onClick={addvalue}>add value {counter}</button>
    <br />
    <button onClick={deletecouter}>delete value {counter}</button>
    </>
  )
}

export default App
