import React from 'react'

type BasicInputProps = {
    placeholder: string; 
    value: string; 
    onChange: any;
}

const BasicInput = ({value, onChange, placeholder}: BasicInputProps) => {
  return (
    <input value={value} onChange={onChange} placeholder={placeholder} style={{height: 30, width: 200, borderRadius: 5, paddingLeft: 15}}/>
  )
}

export default BasicInput