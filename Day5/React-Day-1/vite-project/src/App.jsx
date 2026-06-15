// Shortcut key: rafce 
// and then run in terminal -- npm run dev
//Componet is resuable code block that return a react element
//Virtual DOM is a copy of real DOM, it is a representation of real DOM in memory. It is a lightweight copy of real DOM. It is used to improve the performance of the application. When we make changes to the virtual DOM, it compares the virtual DOM with the real DOM and updates only the changed parts of the real DOM. This process is called reconciliation.
//We have 2 virtual doms:
//1. First dom is created at the time of mounting of react component.

import React from 'react'
import Home from './Home'

const App = () => {
  return (
    <div>

    <div>App</div>
    <h1> Hello World </h1>
    <Home />
    <nav />
    <hero />
    <services />
    

    </div>
  )
}

export default App