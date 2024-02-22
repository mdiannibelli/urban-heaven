import React from 'react'

export default function Buttons({onClickHandler, value, title}) {
  return (
    <button onClick={onClickHandler} value={value} className='bg-[#000] hover:bg-[rgb(97,97,97)] border rounded-md text-white py-2 px-4 mr-2'>{title}</button>
  )
}
