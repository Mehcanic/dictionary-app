import { useEffect, useState } from "react"

import Icon from "./Icon"

interface SearchBarProps {
  onSearch: (data: unknown[]) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)




  const fetchSearchData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      onSearch(data);
    } catch (error) {
      // setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchData()
    }
  }, [searchTerm])


  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
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