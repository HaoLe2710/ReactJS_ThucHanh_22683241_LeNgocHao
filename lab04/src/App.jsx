import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UseReducer from '../components/UseReducer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseReducer/>
    </>
  )
}

export default App
