import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "@/components/mode-toggle"
import {RosNode }  from "./components/rosnode"

function ComponentSlate() {
  return (  
 
<ThemeProvider>
  <div >
      <RosNode />
  </div>
</ThemeProvider>
  )
}

export default ComponentSlate
