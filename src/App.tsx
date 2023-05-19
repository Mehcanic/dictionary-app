import { useState } from "react"

import Header from "./components/layout/Header"
import Main from "./components/layout/Main"

import { useTheme } from "./components/common/useTheme"

function App() {
  const { theme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('font-sansSerif')

  return (
    <div className={`w-full h-screen min-h-[700px] mx-auto ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="w-full h-full bg-primary-light dark:bg-background-dark">
        <Header selectedFont={selectedFont} onFontChange={setSelectedFont} />
        <Main />
      </div>
    </div>
  )
}

export default App
