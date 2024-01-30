import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard";

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
            <MyRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function App2() {
  return (
    <ThemeProvider>
      <Router>
        <Route
          render={(props: unknown) => (
            <Layout {...props}>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/page-1" component={Page1} />
                <Route path="/page-2" component={Page2} />
                <Route path="/page-3" component={Page3} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          )}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
