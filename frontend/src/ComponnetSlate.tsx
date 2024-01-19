import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from "@/components/mode-toggle"

function ComponentSlate() {
  return (  
 
<ThemeProvider>
  <div className="flex p-2 justify-between">
    {/* search bar */}
    <div className="flex bg-red-300 rounded-sm  mr-auto py-1 px-2">search bar</div>
    <div className="flex bg-blue-300 rounded-sm ml-auto py-1 px-2">hello</div>
  </div>
</ThemeProvider>
  )
}

export default ComponentSlate
