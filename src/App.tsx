import { useState } from "react"

import Header from "./components/Header"


import { useTheme } from "./components/useTheme"

function App() {
  const { theme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('font-sansSerif')

  return (
    <div className={`h-screen ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="h-full bg-primary-light dark:bg-gray-800">
        <Header selectedFont={selectedFont} onFontChange={setSelectedFont} />

      </div>
    </div>
  )
}

export default App
