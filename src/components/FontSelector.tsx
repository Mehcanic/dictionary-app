import React from 'react'

interface FontSelectorProps {
  selectedFont: string;
  onFontChange: (font: string) => void;
}


const FontSelector: React.FC<FontSelectorProps> = ({ selectedFont, onFontChange }) => {

const fonts = [
  { name: 'Sans Serif', className: 'font-sansSerif' },
  { name: 'Serif', className: 'font-serif' },
  { name: 'Mono', className: 'font-monospace' }
]

  return (
    <select
      value={selectedFont}
      onChange={(e) => onFontChange(e.target.value)}
      className="border p-2 rounded"
    >
      {fonts.map((font) => (
        <option key={font.name} value={font.className}>
          {font.name}
        </option>
      ))}
    </select>
  )
}

export default FontSelector