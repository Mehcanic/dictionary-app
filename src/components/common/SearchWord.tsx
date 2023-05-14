import React from 'react'

import { DictionaryData } from '../types/DictionaryData';

interface SearchWordProps {
  searchData: DictionaryData | null;
}

const SearchWord: React.FC<SearchWordProps> = ({ searchData }) => {

  if (!searchData) {
    return <div>No data</div>;
  }

  const phoneticsWithAudio = searchData.phonetics.filter(phonetic => phonetic.audio !== '');
  
  if (phoneticsWithAudio.length > 0) {
    const firstPhonetic = phoneticsWithAudio[0];

    return (
      <div>
        <p>{firstPhonetic.text}</p>
        <audio controls src={firstPhonetic.audio}>
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }

  return (
    <div>
      <h1>{searchData.word}</h1>
      <h3></h3>
    </div>
  )
}

export default SearchWord