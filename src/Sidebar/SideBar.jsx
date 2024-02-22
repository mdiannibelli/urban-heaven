import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

export default function SideBar({handleChange}) {
  console.log(handleChange)
  return (
    <section className='m-2 mt-40 absolute w-[15%] max-h-min border-r-[2px] flex flex-col items-center'>
        <div className='mb-4 mt-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M13.5 17h-7.5v-14h-2" /><path d="M6 5l14 1l-.858 6.004m-2.642 .996h-10.5" /><path d="M19 16l-2 3h4l-2 3" /></svg>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
  )
}
