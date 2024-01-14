import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import { Navbar } from "./components/navbar";

import { AuthPage } from "./pages/auth";
import { DashboardPage } from "./pages/dashboard";
import { SettingPage } from "./pages/settings";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>empty is this</h1>}/>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/settings" element={<SettingPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
