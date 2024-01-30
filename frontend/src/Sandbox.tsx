import { ThemeProvider } from "@/components/theme-provider"
import { VideoNode } from "./components/videonode"
import Joystick from "./components/joystick"
import { Sidebar } from "react-pro-sidebar"
import MySidebar from "./scenes/global/Sidebar"
import Sidepanel from "./scenes/global/Sidepanel"
import MyRoutes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"
// import { ModeToggle } from "@/components/mode-toggle"


function Sandbox() {
  return (  
<ThemeProvider>
  <BrowserRouter>
    <div className="flex">
      <Sidepanel defaultActive={0}/>
      <MyRoutes/>
    </div>
  </BrowserRouter>
</ThemeProvider>
  )
}

export default Sandbox
