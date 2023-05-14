
import FontSelector from '../common/FontSelector'
import ThemeSwitcher from '../common/ThemeSwitcher';

import Icon from '../common/Icon';
import DecorativeLine from '../common/DecorativeLine';

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
        <DecorativeLine className='w-[1px] h-8 border-decorativeLine-light dark:border-decorativeLine-light'/>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Header