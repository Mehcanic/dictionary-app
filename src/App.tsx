import { useState } from "react"

import Header from "./components/Header"
// import SearchWord from "./components/SearchWord"
// import SearchBar from "./components/SearchBar"
// import SearchResultsNoun from "./components/SearchResultsNoun"
// import SearchResultsVerb from "./components/SearchResultsVerb"

import { useTheme } from "./components/useTheme"

function App() {
  const { theme } = useTheme()
  const [selectedFont, setSelectedFont] = useState('font-sansSerif')

  return (
    <div className={`w-[768px] h-screen mx-auto ${theme === 'dark' ? 'dark' : ''} ${selectedFont}`}>
      <div className="h-full bg-primary-light dark:bg-background-dark">
        <Header selectedFont={selectedFont} onFontChange={setSelectedFont} />
        {/* <SearchBar /> */}
        {/* <SearchWord /> */}
        {/* <SearchResultsNoun /> */}
        {/* <SearchResultsVerb /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
