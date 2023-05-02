
import { useTheme } from './useTheme';
import FontSelector from './FontSelector'

interface HeaderProps {
  onFontChange: (font: string) => void;
  selectedFont: string;
}


const Header: React.FC<HeaderProps> = ({ selectedFont, onFontChange }) => {
  const { toggleTheme } = useTheme()

  return (
    <header>
      <button
      className="px-4 py-2 mt-4 ml-4 bg-blue-600 text-white rounded"
      onClick={toggleTheme}
      >
      Toggle Theme
      </button>
      <FontSelector 
        selectedFont={selectedFont}
        onFontChange={onFontChange}
        />

      <h1 className="bg-background-light dark:bg-background-dark dark:text-fontPrimary-dark">Something</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ducimus fugiat molestiae ipsam perspiciatis fuga doloremque repellat incidunt autem. Magni!</p>
    </header>
  )
}

export default Header