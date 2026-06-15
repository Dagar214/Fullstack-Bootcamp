//rafce

import React,{useState}from 'react'
import Home from './Home'

const App = () => {
const [count, setCount] = useState(0)
  const handleClick = () => {
    console.log("Clicked")
  setCount(count + 1)
  }
  const handleClick2 = () => {
    console.log("Clicked")
  setCount(count - 1)
  }

  return (
    <>
    <div><h1>App</h1></div>
    <h1> {count}</h1>
    <button onClick={handleClick}>Click </button>
    <button onClick={handleClick2}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <Home/>
    </>
  )
}

export default App