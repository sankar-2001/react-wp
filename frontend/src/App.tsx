
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from "./components/mode-toggle" 

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
      <>
        <h1>this is a heading too</h1>
        <ModeToggle/>
        
      </>
      }
    </ThemeProvider>
  )
}
 
export default App