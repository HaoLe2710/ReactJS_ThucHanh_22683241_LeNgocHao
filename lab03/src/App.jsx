import { useState } from 'react'
import Item from '../components/Item.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabItem from '../components/TabItem.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TabItem/>
    </>
  )
}

export default App
