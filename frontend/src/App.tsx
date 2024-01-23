import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar"
import Dashboard from "./scenes/Dashboard";
import AuthPage from "./scenes/AuthPage";

import Register from "./components/auth";
import { Login } from "./components/auth";

function App() {
  return (  
 
<ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthPage><Login/></AuthPage>} />
          <Route path="/register" element={<AuthPage><Register/></AuthPage>} />
          <Route path="/" element={<MySidebar/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
</ThemeProvider>
  ) 
}

export default App
