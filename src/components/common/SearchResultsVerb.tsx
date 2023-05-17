import React from 'react'

import { DictionaryData } from '../types/DictionaryData';

interface SearchResultsVerbProps {
  searchData: DictionaryData | null;
}

const SearchResultsVerb: React.FC<SearchResultsVerbProps> = ({ searchData }) => {


  // TODO map over definitions and return only verb
  return (
    <div>
      <p>
        {searchData?.meanings[0].definitions[0].definition}
      </p>
    </div>
  )
}

export default SearchResultsVerb