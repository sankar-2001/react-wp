import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/Dashboard";
import AuthPage from "./scenes/AuthPage";


function App() {
  return (  
 
<ThemeProvider>
        <Topbar/>
        <MySidebar/>
        <Dashboard/>  
      <Router>
        <Routes>
          <Route path="/" element={<h1>empty is this</h1>}/>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dboard" element={<h1>this is business</h1>}/>
          <Route path="/d2board" element={<h1>this is masdfass</h1>}/>

        </Routes>
      </Router>
</ThemeProvider>
  ) 
}

export default App
