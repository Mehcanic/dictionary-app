import { useEffect, useState } from "react"

import Icon from "./Icon"

interface SearchBarProps {
  onSearch: (data: unknown[]) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello');

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  

  return (
    <div className="relative">
      <input 
        type="search"
        className="rounded-2xl w-[736px] h-16 px-6 py-5 bg-inputBackground-light dark:bg-inputBackground-dark focus:border-fontAccent-light"
        placeholder="Search for any word..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Icon svg='search' className="absolute right-12 top-1/2 w-4" />
    </div>
  )
}

export default SearchBar