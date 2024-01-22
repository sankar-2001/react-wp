import { ThemeProvider } from "@/components/theme-provider"
import { VideoNode } from "./components/videonode"
// import { ModeToggle } from "@/components/mode-toggle"

function Sandbox() {
  return (  
 
<ThemeProvider>
    <h1>from sandbox below is the video mode </h1>
    <VideoNode/>
</ThemeProvider>
  )
}

export default Sandbox
