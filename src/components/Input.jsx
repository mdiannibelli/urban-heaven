import React from 'react'

export default function Input({handleChange, name, title, value, color}) {
  return (
    <label className='categories py-1 px-3 cursor-pointer block relative pl-[35px] mb-[12px]'>
          <input onChange={handleChange} className='absolute cursor-pointer opacity-0' type="radio" name={name} value={value}/>
          <span style={{backgroundColor: color}} className='checkmark ml-2 absolute top-1 left-0 h-[20px] w-[20px] bg-[#eee] rounded-xl'></span>{title}
        </label>
  )
}
