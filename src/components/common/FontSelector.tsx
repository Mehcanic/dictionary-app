import React from 'react'
import { useTheme } from './useTheme';

import Icon from './Icon';

interface FontSelectorProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
  className: string;
}

const FontSelector: React.FC<FontSelectorProps> = ({ selectedFont, onFontChange }) => {
  const theme = useTheme()
  const fontWeightBold = theme?.extend?.fontWeight?.bold
  

  const fonts = [
    { name: 'Sans Serif', className: 'font-sansSerif' },
    { name: 'Serif', className: 'font-serif' },
    { name: 'Mono', className: 'font-monospace' }
  ]

  return (
    <div className='relative inline-block'>
      <select
        value={selectedFont}
        onChange={(e) => onFontChange(e.target.value)}
        style={{ 
          fontWeight: fontWeightBold,
          minWidth: '36px',
          maxWidth: '120px', 
        }}
        className='bg-background-light dark:bg-background-dark text-fontPrimary-light dark:text-fontPrimary-dark appearance-none pr-8 text-center font-bold'
        >
        {fonts.map((font) => (
          <option key={font.name} value={font.className}>
            {font.name}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
          <Icon svg='arrow' className='h-4 w-4'/>
      </div>
    </div>
  )
}

export default FontSelector