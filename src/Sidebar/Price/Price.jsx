import React from 'react'
import Input from '../../components/Input'

export default function Price({handleChange}) {
  return (
    <div>
      <h2 className='text-1xl font-semibold mb-2 mt-6'>Price</h2>
      <label className='categories py-1 px-3 cursor-pointer block relative pl-[35px] mb-[12px]'>
          <input className='absolute cursor-pointer opacity-0' onChange={handleChange} type="radio" value="" name='test2' />
          <span className='checkmark ml-2 absolute top-1 left-0 h-[20px] w-[20px] bg-[#eee] rounded-xl'></span>All
        </label>

        <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={100}
        title="$50 - 100"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={150}
        title="$100 - 150"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
        />
    </div>
  )
}
