import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";

import { Register } from "./components/auth";
import { Login } from "./components/auth";
import RobotCard from "./components/RobotCard";
import MyRoutes from "./routes/Routes";

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
            <MyRoutes/>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
