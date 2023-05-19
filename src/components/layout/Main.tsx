import React, { useState, useEffect } from 'react';

import SearchBar from '../common/SearchBar';
import SearchResults from '../common/SearchResults'
import SearchWord from '../common/SearchWord';
import SearchResultsNoun from '../common/SearchResultsNoun';
import SearchResultsVerb from '../common/SearchResultsVerb';
import Source from '../common/Source';
import NoDefinitionsFound from '../common/NoDefinitionsFound';

import { DictionaryData } from '../types/DictionaryData';

const Main: React.FC = () => {
  const [searchData, setSearchData] = useState<DictionaryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (data: DictionaryData) => {
    setSearchData(data);
    setError(error)
  };

  const handleError = (error: string) => {
    setError(error)
    setSearchData(null);
  };

  useEffect(() => {
    console.log(`${searchData} in the main component`)
  }, [searchData]
  )


  return (
    <main className='flex flex-col max-w-[736px] mx-auto'>
      <SearchBar onSearch={handleSearch} onError={handleError} />
      { searchData ? (
        <>
          <SearchWord searchData={searchData} />
          <SearchResults searchData={searchData} />
          {/* <SearchResultsNoun searchData={searchData} /> */}
          {/* <SearchResultsVerb searchData={searchData} /> */}
          {/* <Source searchData={searchData}/> */}
        </>
        ) : (
          <NoDefinitionsFound />
        )
      }
    </main>
  );
};

export default Main;
