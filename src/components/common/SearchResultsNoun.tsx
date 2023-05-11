import React from 'react'

import { DictionaryData } from '../types/DictionaryData';

interface SearchResultsNounProps {
  searchData: DictionaryData | null;
}

const SearchResultsNoun: React.FC<SearchResultsNounProps> = ({ searchData }) => {
  return (
    <div>SearchResultsNoun</div>
  )
}

export default SearchResultsNoun