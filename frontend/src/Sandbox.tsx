import { ThemeProvider } from "@/components/theme-provider"
import { VideoNode } from "./components/videonode"
import Joystick from "./components/joystick"
// import { ModeToggle } from "@/components/mode-toggle"


function Sandbox() {
  return (  
 
<ThemeProvider>
  <Joystick/>
</ThemeProvider>
  )
}

export default Sandbox
