
import FontSelector from './FontSelector'
import ThemeSwitcher from './ThemeSwitcher';

import Icon from './Icon';
import DecorativeLine from './DecorativeLine';

interface HeaderProps {
  onFontChange: (font: string) => void;
  selectedFont: string;
}


const Header: React.FC<HeaderProps> = ({ selectedFont, onFontChange }) => {

  return (
    <header className='flex flex-row justify-between items-center max-w-[736px] h-16 m-6 py-16 '>
      <div className='flex w-4/6'>
        <Icon svg='logo' className='w-8 h-8 text-fontSecondary-light' />
      </div>
      <div className='flex w-2/6 mx-auto justify-between items-center'>
        <FontSelector 
          selectedFont={selectedFont}
          onFontChange={onFontChange}
          className=''
          />
        <DecorativeLine width='1px' height='2rem' />
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header