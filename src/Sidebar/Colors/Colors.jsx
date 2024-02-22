import React from 'react'
import Input from '../../components/Input'

export default function Colors({handleChange}) {
  return (
    <div>
      <h2 className='text-1xl font-semibold mb-2 mt-6'>Colors</h2>
      <label className='categories py-1 px-3 cursor-pointer block relative pl-[35px] mb-[12px]'>
          <input className='absolute cursor-pointer opacity-0' onChange={handleChange} type="radio" value="" name='test2' />
          <span className='checkmark ml-2 absolute top-1 left-0 h-[20px] w-[20px] bg-[#eee] rounded-xl'></span>All
        </label>

        <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        color="black"
        name="test3"
        />
        <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        color="blue"
        name="test3"
        />
        <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        color="red"
        name="test3"
        />
        <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        color="green"
        name="test3"
        />
        <Input
        handleChange={handleChange}
        value="white"
        title="White"
        color="white"
        name="test3"
        />
    </div>
  )
}
