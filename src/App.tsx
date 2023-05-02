import { useState } from "react"

import Header from "./components/Header"

import Logo from "./components/Logo"
import { useTheme } from "./components/useTheme"

function App() {
  const { theme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('sans-serif')

  return (
    <div className={`h-screen ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="h-full bg-gray-100 dark:bg-gray-800">
        <Header selectedFont={selectedFont} onFontChange={setSelectedFont} />
        <Logo />
        
      </div>
    </div>
  )
}

export default App
