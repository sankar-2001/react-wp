import React from 'react'
import ReactDOM from 'react-dom/client'
import Sandbox from './Sandbox.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {import.meta.env.VITE_RENDER_APP ==  1  ? <App/> : <Sandbox/> }
  </React.StrictMode>,
)
