import React from 'react'

import DecorativeLine from './DecorativeLine';

import { DictionaryData } from '../types/DictionaryData';

interface SearchResultsNounProps {
  searchData: DictionaryData | null;
}


const SearchResultsNoun: React.FC<SearchResultsNounProps> = ({ searchData }) => {

  // TODO map over definitions and return only noun
  const nounMeanings = searchData?.meanings.filter(meaning => meaning.partOfSpeech === 'noun');


  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='mr-5 italic font-bold text-headingMedium text-fontPrimary-light dark:text-fontPrimary-dark'>noun</h2>
        <DecorativeLine className='w-full h-[1px] border-decorativeLine-light dark:border-decorativeLine-dark' />
      </div>
      {searchData?.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            {meaning.definitions.map((definition, defIndex) => (
              <li key={defIndex}>{definition.definition}</li>
            ))}
          </div>
        );
      })}
    </div>
  )
}

export default SearchResultsNoun