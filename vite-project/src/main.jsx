import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return(
    <div>
      <h1>Custome app for react</h1>
    </div>
  )
}
const anotherElement = (
  <a href="http://google.com"target='_blank'>visit google</a>
)

const anotheruser="hellofrends"
const anotherElements = React.createElement(
  'a',
  {href:"http://google.com", target :'_blank'},
  'click me to visit google',anotheruser
  )
ReactDOM.createRoot(document.getElementById('root')).
render(
 
    anotherElements
  
)
