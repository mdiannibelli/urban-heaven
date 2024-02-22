import React from 'react'
import './Category.css'
import Input from '../../components/Input'
export default function Category({handleChange}) {
  return (
    <div>
      <h2 className='text-1xl font-semibold mb-2'>Category</h2>
      <div className='flex flex-col'>
        <label className='categories py-1 px-3 cursor-pointer block relative pl-[35px] mb-[12px]'>
          <input className='absolute cursor-pointer opacity-0' onChange={handleChange} type="radio" value="" name='test' />
          <span className='checkmark ml-2 absolute top-1 left-0 h-[20px] w-[20px] bg-[#eee] rounded-xl'></span>All
        </label>

        <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
        />
      </div>
    </div>
  )
}
