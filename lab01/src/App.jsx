import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helloname } from './components/Helloname'
import { AddTwoNumbers } from './components/AddTwoNumbers'
import { Caculator } from './components/Caculator'
import { TodoApp } from './components/TodoApp'

function App() {

  return (
    <>
      <Helloname/>
      <br />
      <AddTwoNumbers/>
      <br />
      <Caculator/>
      <br />
      <TodoApp/>
    </>
  )
}

export default App
