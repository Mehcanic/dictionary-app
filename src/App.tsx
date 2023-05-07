import { useState } from "react"

import Header from "./components/layout/Header"
import Main from "./components/layout/Main"
import Footer from "./components/layout/Footer"


import { useTheme } from "./components/common/useTheme"

function App() {
  const { theme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('font-sansSerif')

  return (
    <div className={`w-[768px] h-screen mx-auto ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="h-full bg-primary-light dark:bg-background-dark">
        <Header selectedFont={selectedFont} onFontChange={setSelectedFont} />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
