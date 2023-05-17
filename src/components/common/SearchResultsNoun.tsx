import React from 'react'

import DecorativeLine from './DecorativeLine';

import { DictionaryData } from '../types/DictionaryData';

interface SearchResultsNounProps {
  searchData: DictionaryData | null;
}


const SearchResultsNoun: React.FC<SearchResultsNounProps> = ({ searchData }) => {

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='mr-5 italic font-bold text-headingMedium text-fontPrimary-light dark:text-fontPrimary-dark'>noun</h2>
        <DecorativeLine className='w-full h-[1px] border-decorativeLine-light dark:border-decorativeLine-dark' />
      </div>
      <div>
        <h2 className='text-headingMedium text-fontSecondary-light'>Meaning</h2>
      </div>
      {searchData?.meanings 
        .filter((meaning) => meaning.partOfSpeech === 'noun')
        .map((meaning, index) => (
          <div key={index}>
            {meaning.definitions.map((definition, definitionIndex) => (
              <div>
                <li key={definitionIndex} className='marker:text-fontAccent-light'>{definition.definition}</li>
                {definition.example && <p>{definition.example}</p>}
              </div>
            ))}
          </div>
        ))
      }
    </div>
  )
}

export default SearchResultsNoun