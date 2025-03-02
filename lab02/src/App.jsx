import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header_web from './components/Header_web'
import './App.css'
import Footer_web from './components/Footer_web'
import Body_web from './components/Body_web'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Header_web/>
      // <Footer_web/>
      // <Body_web/>
  )
}

export default App
