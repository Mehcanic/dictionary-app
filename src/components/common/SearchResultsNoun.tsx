import React from 'react'
import DictionaryData from '../layout/Main'

interface SearchResultsNounProps {
  data: typeof DictionaryData[] | null;
}

const SearchResultsNoun: React.FC<SearchResultsNounProps> = ({ data }) => {
  return (
    <div>SearchResultsNoun</div>
  )
}

export default SearchResultsNoun