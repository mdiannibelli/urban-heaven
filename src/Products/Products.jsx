import React from 'react'
export default function Products({result}) {
  return (
        <section className='grid sm:grid-cols-[260px] lg:grid-cols-2 xl:grid-cols-[260px,260px,260px,260px] gap-12 justify-center items-center mt-12'>
            {result}
        </section>
  )
}
