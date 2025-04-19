import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SummerRecipesUI from './ui/SummerRecipesUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SummerRecipesUI/>
    </>
  )
}

export default App
