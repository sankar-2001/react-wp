import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
function App() {
  return (  
 
<ThemeProvider>
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 " >
  
    <div className="text-4xl text-gray-600">
      <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
      <p className="text-green-100 bg-orange-300 bg-gradient-to-r from-red-500 to-purple-600 p-4 items-center rounded-2xl drop-shadow-lg hover:text-green-400">You have a new message!</p>
    </div>
    <div>
  
      <div className="rounded-lg bg-red-400 py-1 px-2 m-2">Thello</div>
      <div className="rounded-lg bg-red-400 py-1 px-2 m-2">Thello</div>
      <div className="rounded-lg bg-red-400 py-1 px-2 m-2">Thello</div>
      <ModeToggle/>
    </div>
  </div>
</ThemeProvider>
  )
}

export default App
