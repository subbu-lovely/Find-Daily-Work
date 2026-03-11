import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bubbles from "./components/Bubbles";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Bubbles />
  </StrictMode>,
)
