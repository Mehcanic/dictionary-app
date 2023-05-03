
import Logo from './Logo';
import FontSelector from './FontSelector'
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  onFontChange: (font: string) => void;
  selectedFont: string;
}


const Header: React.FC<HeaderProps> = ({ selectedFont, onFontChange }) => {

  return (
    <header>
      <Logo />
      <FontSelector 
        selectedFont={selectedFont}
        onFontChange={onFontChange}
        />
      <ThemeSwitcher />
      
      

      <h1 className="bg-background-light dark:bg-background-dark dark:text-fontPrimary-dark">Something</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ducimus fugiat molestiae ipsam perspiciatis fuga doloremque repellat incidunt autem. Magni!</p>
    </header>
  )
}

export default Header