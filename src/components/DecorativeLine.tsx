import React from 'react'


interface DecorativeLineProps {
  width: string;
  height: string;
}

const DecorativeLine: React.FC<DecorativeLineProps> = ({ width, height }) => {

  return (
    <div 
      className={`inline-block border border-decorativeLine-light`}
      style={{
        width: width,
        height: height,
      }}
    >
    </div>
  )
}

export default DecorativeLine