import React from 'react'
import { useTheme } from '../components/useTheme'

import Icon from './Icon'

const  ThemeSwitcher: React.FC= () => {
  const { toggleTheme } = useTheme()

  return (
    <div className='flex flex-row justify-end items-center w-20'>
      <div className="relative flex flex-row">
        <input
          id="theme-switcher"
          type="checkbox"
          className="hidden"
          onChange={toggleTheme}
        />
        <div className='flex flex-row gap-x-5 justify-between w-full h-full'>
          <label htmlFor="theme-switcher" className="cursor-pointer">
            <div className="w-10 h-5 rounded-full bg-fontSecondary-light dark:bg-fontAccent-dark"></div>
            <div
              style={{ top: '0.19rem' }} 
              className="absolute left-1 w-3.5 h-3.5 rounded-full bg-fontPrimary-dark dark:bg-fontPrimary-dark transition-all duration-300 ease-in-out transform translate-x-0 dark:translate-x-[1.1rem]"></div>
          </label>
          <Icon svg='moon' className='fill-current w-5 h-5 text-fontSecondary-light dark:text-fontAccent-dark' stroke='' />
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher