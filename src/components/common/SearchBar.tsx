import  React, { useEffect, useState } from "react"

import Icon from "./Icon"

import { DictionaryData } from "../types/DictionaryData"

interface SearchBarProps {
  word?: string;
  definition?: string;
  onSearch: (data: DictionaryData) => void;
  onError: (error: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onError }) => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [wasEnterPressed, setWasEnterPressed] = useState(false);

  // TODO add regex to check if the word is valid; for special characters, numbers, etc.
  const fetchData = async () => {
    if (word) {
      setLoading(true);
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json();
        setData(data);
        setLoading(false);
        onSearch(data[0]);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        onError('Error fetching data')
      }
    } else if (wasEnterPressed) {
      setError(`Whoops, can't be empty...`);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && word === '') {
      setWasEnterPressed(true);
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  // TODO figure out why there is a white outline around the input field when it is focused and in dark mode
  return (
    <div className="flex justify-center w-full m-auto">
      <form onSubmit={handleSubmit} className="flex justify-center flex-col w-full m-auto">
        <input
          type="search"
          className={`
          rounded-2xl 
          w-[763px]
          h-16
          px-6 
          m-auto 
          py-5 
          bg-inputBackground-light 
          dark:bg-inputBackground-dark 
          focus:outline-fontAccent-light 
          visited:outline-error-light
          ${error ? "focus:outline-error-light dark:focus:ring-error-light dark:focus:outline-error-light dark:outline-error-light visited:outline-error-light dark:focus:ring-0" : "focus:outline-fontAccent-light dark:focus:ring-transparent"}
          `}
          placeholder="Search for any word..."
          value={word}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <Icon svg='search' className="right-6 top-6 w-4" />
      </form>
    </div>
  )
}

export default SearchBar
