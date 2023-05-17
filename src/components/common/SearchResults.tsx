import React from 'react'

import DecorativeLine from './DecorativeLine';
import { DictionaryData } from '../types/DictionaryData';

interface SearchResultsProps {
  searchData: DictionaryData | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchData }) => {
  const partsOfSpeech = searchData?.meanings.map(meaning => meaning.partOfSpeech);

  return (
    <div>
      {partsOfSpeech && partsOfSpeech.map((partOfSpeech) => {
        const filteredMeanings = searchData?.meanings.filter((meaning) => meaning.partOfSpeech === partOfSpeech);

        if (filteredMeanings && filteredMeanings.length > 0) {
          return (
            <div key={partOfSpeech}>
              <div className='flex justify-between items-center'>
                <h2 className='mr-5 italic font-bold text-headingMedium text-fontPrimary-light dark:text-fontPrimary-dark'>{partOfSpeech}</h2>
                <DecorativeLine className='w-full h-[1px] border-decorativeLine-light dark:border-decorativeLine-dark' />
              </div>
              <div>
                <h2 className='text-headingMedium text-fontSecondary-light'>Meaning</h2>
              </div>
              {filteredMeanings.map((meaning, index) => (
                <div key={index}>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <div key={definitionIndex}>
                      <li className='marker:text-fontAccent-light'>{definition.definition}</li>
                      {definition.example && <p>{definition.example}</p>}
                    </div>
                  ))}
                  {meaning.synonyms && meaning.synonyms.length > 0 && (
                    <div>
                      <p>Synonyms:</p>
                      <ul>
                        {meaning.synonyms.map((synonym, synonymIndex) => (
                          <li key={synonymIndex} className='text-fontAccent-light'>{synonym}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        }

        return null;
      })}
    </div>
  )
}

export default SearchResults
