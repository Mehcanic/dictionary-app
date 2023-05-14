import React from 'react'

import { DictionaryData } from '../types/DictionaryData';

interface SourceProps {
  searchData: DictionaryData | null;
}

const Source: React.FC<SourceProps> = ({ searchData }) => {
  return (
    <div>
      <h2>Source</h2>
      <p>
        {searchData?.meanings[0].definitions[0].definition}
      </p>
    </div>
  )
}

export default Source