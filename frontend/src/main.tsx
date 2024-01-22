import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Sandbox from './Sandbox.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {import.meta.env.VITE_RENDER_APP ==  1  ? <App/> : <Sandbox/> }
  </React.StrictMode>,
)
