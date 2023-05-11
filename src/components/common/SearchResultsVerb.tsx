import React from 'react'
import DictionaryData from '../layout/Main'

interface SearchResultsVerbProps {
  data: typeof DictionaryData[] | null;
}

const SearchResultsVerb: React.FC<SearchResultsVerbProps> = ({ data }) => {
  return (
    <div>SearchResultsVerb</div>
  )
}

export default SearchResultsVerb