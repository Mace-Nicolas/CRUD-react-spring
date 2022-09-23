import React from 'react'

type SelectorProps = {
  value: string; 
  onChange: any;
  options: string[];
}

const Selector = ({ value, onChange, options }: SelectorProps) => {
  return (
    <select  value={value} onChange={onChange} className='selector'>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  )
}

export default Selector