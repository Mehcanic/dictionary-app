import React from 'react'

interface SearchWordProps {
  data: [];
}

const SearchWord: React.FC<SearchWordProps> = ({ data }) => {
  return (
    <div>
      {/* {data.map((item: any) => (
        <div key={item.id}>
          <h1>{item.word}</h1>
          </div>
      ))} */}
    </div>
  )
}

export default SearchWord