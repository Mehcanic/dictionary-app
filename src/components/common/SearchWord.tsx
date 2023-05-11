import React, { useEffect } from 'react'

import { DictionaryData } from '../types/DictionaryData';

interface SearchWordProps {
  searchData: DictionaryData | null;
}

const SearchWord: React.FC<SearchWordProps> = ({ searchData }) => {

  useEffect(() => {
    console.log(searchData?.word)
  }, [searchData])

  if (searchData === null) {
    return <div>No data</div>;
  }

  return (
    <div>
      <h1>{searchData.word}</h1>
    </div>
  )
}

export default SearchWord