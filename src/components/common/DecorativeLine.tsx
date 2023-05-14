import React from 'react'


interface DecorativeLineProps {
  className?: string;
}

const DecorativeLine: React.FC<DecorativeLineProps> = ({ className }) => {

  return (
    <div 
      className={`inline-block border ${className}`}
    >
    </div>
  )
}

export default DecorativeLine