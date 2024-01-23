import { ThemeProvider } from "@/components/theme-provider"
import { VideoNode } from "./components/videonode"
import Joystick from "./components/joystick"
import { Sidebar } from "react-pro-sidebar"
import MySidebar from "./scenes/global/Sidebar"
// import { ModeToggle } from "@/components/mode-toggle"


function Sandbox() {
  return (  
 
<ThemeProvider>
  <MySidebar/>
</ThemeProvider>
  )
}

export default Sandbox
