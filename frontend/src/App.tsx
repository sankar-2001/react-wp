import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";
import AuthPage from "./scenes/AuthPage";

import { Register } from "./components/auth";
import { Login } from "./components/auth";
import RobotCard from "./components/RobotCard";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex relative">
          <MySidebar />
          <main className="w-full">
            <Topbar />
            <RobotCard robot_id={"hello"} />
            <RobotCard robot_id={"world"} />
            <RobotCard robot_id={"simmon"} />
            <Routes>
              <Route
                path="/register"
                element={
                  <AuthPage>
                    <Register />
                  </AuthPage>
                }
              />
              <Route
                path="/login"
                element={
                  <AuthPage>
                    <Login />
                  </AuthPage>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
