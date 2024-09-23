import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componet/card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Card/>
    <h1 className='bg-green-700 text-black rounded-xl' >Tailwind css</h1>
    </>
  )
}

export default App
