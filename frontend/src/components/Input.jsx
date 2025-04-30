import React from 'react'

const Input = ({type, placeholder, value, onChange, id, name}) => {
  return (
    <>
        <input className='border rounded-lg px-3 py-2 border-blue-500 ' type={type} placeholder={placeholder} value={value} onChange={onChange} id={id} name={name}/>
    </>
  )
}

export default Input