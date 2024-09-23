import React from 'react'
import { useState } from 'react'


function Card() {
  const [counter, setcounter] = useState(0)
  const addvalue=()=>{
    setcounter(counter+1)
  }
  return (
    <>     
     
    <div
     
    ><h1>add value {counter}</h1>
      <button onClick={addvalue} className='bg-slate-400'>Click now {counter}</button>
    </div>
    </>

  )
  
}

export default Card
