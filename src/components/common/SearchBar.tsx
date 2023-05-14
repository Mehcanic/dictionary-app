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

  const fetchData = async () => {
    if (word) {
      setLoading(true);
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await response.json();
        setData(data);
        setLoading(false);
        onSearch(data[0]);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        onError('Error fetching data')
      }
    } else {
      setData([]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative flex justify-center">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="search"
          className="rounded-2xl w-full h-16 mx-auto px-6 py-5 bg-inputBackground-light dark:bg-inputBackground-dark focus:border-fontAccent-light"
          placeholder="Search for any word..."
          value={word}
          onChange={handleInputChange}
          />
        <Icon svg='search' className="absolute right-8 top-6 w-4" />
      </form>
    </div>
  )
}

export default SearchBar
