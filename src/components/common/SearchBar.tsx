import  React, { useEffect, useState } from "react"

import Icon from "./Icon"

interface DictionaryData {
  word?: string;
  definition?: string;
  updateData?: (data: DictionaryData[] | null) => void;
  data?: DictionaryData[] | null;
}

const SearchBar: React.FC<DictionaryData> = ({ updateData }) => {
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
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
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
    <div className="relative">
      <form onSubmit={handleSubmit}>

      <input
        type="search"
        className="rounded-2xl w-[736px] h-16 px-6 py-5 bg-inputBackground-light dark:bg-inputBackground-dark focus:border-fontAccent-light"
        placeholder="Search for any word..."
        value={word}
        onChange={handleInputChange}
        />
      <Icon svg='search' className="absolute right-12 top-6 w-4" />
        {data && data.map((item: any) => {
          return (
            <div className="flex flex-col">
              <h1>{item.word}</h1>
              {item.meanings.map((meaning: any) => (
                <div key={meaning.partOfSpeech}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <ul>
                    {meaning.definitions.map((definition: any) => (
                      <li key={definition.definition}>{definition.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default SearchBar
