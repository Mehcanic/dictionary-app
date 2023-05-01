import { useState } from "react"

import Logo from "./components/Logo"

import { useTheme } from "./components/ThemeProvider"
import FontSelector from "./components/FontSelector"

function App() {
  const { theme, toggleTheme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('sans-serif')

  return (
    <div className={`h-screen ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="h-full bg-gray-100 dark:bg-gray-800">
        <Logo />
        <button
          className="px-4 py-2 mt-4 ml-4 bg-blue-600 text-white rounded"
          onClick={toggleTheme}
          >
          Toggle Theme
        </button>
        <FontSelector 
          selectedFont={selectedFont}
          onFontChange={(font) => setSelectedFont(font)}
        />

        <h1 className="bg-background-light dark:bg-background-dark dark:text-fontPrimary-dark">Something</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ducimus fugiat molestiae ipsam perspiciatis fuga doloremque repellat incidunt autem. Magni!</p>
      </div>
    </div>
  )
}

export default App
