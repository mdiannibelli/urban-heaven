import React from 'react'
import AiFillStar from '../components/AiFillStar';

export default function Card({img, title, reviews, newPrice, prevPrice}) {
  return (
    <div className='border border-gray-200 rounded-md p-8'>
            <img className='xl:w-[200px] lg:w-auto h-36 object-contain' src={img} alt={title} />
            <div>
                <h3 className='text-2xl mt-4 mb-2'>{title}</h3>
                <div className='flex gap-x-2'>
                <AiFillStar/>
                <span className='font-regular text-xs mt-[1px]'>{reviews}</span>
                </div>
            </div>
            
            <div className='flex gap-x-4 mt-4'>
                <h4 className='text-lg text-[24px] font-bold'><del className='mx-2'>{prevPrice}</del>${newPrice}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M10 17h-4v-14h-2" /><path d="M6 5l14 1l-.717 5.016m-7.783 1.984h-5.5" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg>
            </div>

          </div>
  )
}
