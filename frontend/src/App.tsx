import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "@/components/mode-toggle"
function App() {
  return (  
 
<ThemeProvider>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<h1>empty is this</h1>}/>
          {/* <Route path="/auth" element={<AuthPage/>} />
          <Route path="/settings" element={<SettingPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/> */}
        </Routes>
      </Router>
</ThemeProvider>
  ) 
}

export default App
