import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import SearchWord from '../common/SearchWord';
import SearchResultsNoun from '../common/SearchResultsNoun';
import SearchResultsVerb from '../common/SearchResultsVerb';

import { DictionaryData } from '../types/DictionaryData';

const Main: React.FC = () => {
  const [searchData, setSearchData] = useState<DictionaryData | null>(null);

  const handleSearch = (data: DictionaryData) => {
    setSearchData(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchWord searchData={searchData} />
      <SearchResultsNoun searchData={searchData} />
      <SearchResultsVerb searchData={searchData} />
    </div>
  );
};

export default Main;
