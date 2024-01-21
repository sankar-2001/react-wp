import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Sandbox from './Sandbox.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {process.env. RENDER_REACT_APP === 'yes'  ? <App /> : <Sandbox />}  
  </React.StrictMode>,
)
