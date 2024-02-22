import React from 'react'
export default function Searcher({handleInputChange}) {
  return (
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg></span>
        </div>
        <input
        onChange={handleInputChange}
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-52 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search your shoes."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
        </div>
      </div>
  )
}
