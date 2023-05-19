import React from 'react'

import DecorativeLine from './DecorativeLine';
import Icon from './Icon';
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
              <div className='flex items-center my-5'>
                <h2 className='mr-5 italic font-bold text-headingMedium text-fontPrimary-light dark:text-fontPrimary-dark'>{partOfSpeech}</h2>
                <DecorativeLine className='w-full h-[1px] border-decorativeLine-light dark:border-decorativeLine-dark' />
              </div>
              <div>
                <h2 className='text-headingSmall text-fontSecondary-light'>Meaning</h2>
              </div>
              {filteredMeanings.map((meaning, index) => (
                <>
                  <div key={index} className='mt-6 px-5'>
                    {meaning.definitions.map((definition, definitionIndex) => (
                      <div key={definitionIndex} className=' pb-3'>
                        <li className='marker:text-fontAccent-light'>{definition.definition}</li>
                        {definition.example && <p className=''>"{definition.example}"</p>}
                      </div>
                    ))}
                  </div>
                    {meaning.synonyms && meaning.synonyms.length > 0 && (
                      <div className='flex mt-5'>
                        <p className='pr-5'>Synonyms</p>
                        <ul>
                          {meaning.synonyms.map((synonym, synonymIndex) => (
                            <li key={synonymIndex} className='text-fontAccent-light'>{synonym}</li>
                            ))}
                        </ul>
                      </div>
                    )}
                </>
              ))}
              
            </div>
          )
        }
        return null;
      })}
      <DecorativeLine className='w-full h-[1px] border-decorativeLine-light dark:border-decorativeLine-dark' />
      {searchData?.sourceUrls && searchData.sourceUrls.map((url, index) => (
        <div className='flex items-center my-5'>
          <p key={index} className='underline text-sm text-fontSecondary-light'>
            Source<a href={url} target='_blank' rel='noopener noreferrer' className='text-fontPrimary-light dark:text-fontPrimary-dark pl-5 pr-2'>{url}</a>
          </p>
          <Icon svg='newWindow' className='' />
        </div>
      ))}
    </div>
  )
}

export default SearchResults
