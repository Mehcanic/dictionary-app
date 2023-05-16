import React from 'react'

const NoDefinitionsFound = () => {
  return (
    <div className='flex flex-col justify-around items-center w-[736px] m-auto mt-[132px]'>
      <h1 className='text-headingLarge'>😕</h1>
      <h2 className='text-xl font-bold mt-[34px] text-fontPrimary-light dark:text-fontPrimary-dark'>No Definitions Found</h2>
      <p className='text-lg text-center mt-6 text-fontSecondary-light dark:text-fontSecondary-dark '>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}

export default NoDefinitionsFound