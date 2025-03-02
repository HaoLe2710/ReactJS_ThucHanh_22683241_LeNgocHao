import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header_web from './components/Header_web.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header_web/> */}
  </StrictMode>,
)
