import React, { useState } from 'react';
import SearchBar from '../common/SearchBar';
import SearchWord from '../common/SearchWord';
import SearchResultsNoun from '../common/SearchResultsNoun';
import SearchResultsVerb from '../common/SearchResultsVerb';

interface DictionaryData {
  // Define the structure of the fetched data
  word: string;
  phonetics: any[]; // Update with the appropriate type
  meanings: any[]; // Update with the appropriate type
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

const Main: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<DictionaryData[] | null>(null);

  // Define a function to update the fetched data
  const updateFetchedData = (data: any) => {
    setFetchedData(data);
  };

  return (
    <div>
      <SearchBar updateData={updateFetchedData} />
      <SearchWord />
      <SearchResultsNoun data={fetchedData} />
      <SearchResultsVerb data={fetchedData} />
    </div>
  );
};

export default Main;
