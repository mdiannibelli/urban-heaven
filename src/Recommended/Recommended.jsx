import React from 'react'
import Buttons from '../components/Buttons'

export default function Recommended({handleClick}) {
  return (
    <div className='flex flex-col ml-auto lg:ml-[21rem] mt-12'>
      <h2 className='ml-2 sm:ml-0 text-2xl sm:text-3xl font-bold'>Recommended</h2>
      <div className='mt-4'>
        <Buttons onClickHandler={handleClick} value="" title="All Products"/>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
  )
}
