import React from 'react'
import { useTheme } from '../components/useTheme'

import MoonIcon from './MoonIcon'


const  ThemeSwitcher: React.FC= () => {
  const { toggleTheme } = useTheme()

  return (
    <>
      <div className="relative">
        <input
          id="theme-switcher"
          type="checkbox"
          className="hidden"
          onChange={toggleTheme}
        />
        <label htmlFor="theme-switcher" className="cursor-pointer">
          <div className="w-12 h-6 rounded-full bg-fontSecondary-light dark:bg-fontAccent-dark"></div>
          <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-fontPrimary-dark dark:bg-fontPrimary-dark transition-all duration-300 ease-in-out transform translate-x-0 dark:translate-x-6"></div>
        </label>
        <MoonIcon className='fill-current text-fontSecondary-light dark:text-fontAccent-dark' />
      </div>
    </>
  )
}

export default ThemeSwitcher