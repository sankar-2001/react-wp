import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Sandbox from './Sandbox.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* {process.env. RENDER_REACT_APP === 'yes'  ? <App /> : <Sandbox />}   */}
    {<h1>this is from main tsx</h1>}
    {<App/>}
    {<Sandbox/>}
    {/* {process.env.RENDER_REACT_APP} */}
    {/* {process.env.RENDER_REACT_APP === 'yes'  ? <h1>yese</h1> : <h1>nonono</h1>} */}
  </React.StrictMode>,
)
