'use client'
import { useState } from 'react'

export const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <form className="w-full">
      <div className="flex items-center rounded-full border-[1px] border-solid border-transparent bg-[rgb(32,35,39)] focus-within:border-[rgb(29,155,240)]">
        <span className="pl-3">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`h-[24px] w-[24px] ${
              isFocused ? 'fill-[rgb(29,155,240)]' : 'fill-[rgb(113,118,123)]'
            }`}>
            <g>
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
            </g>
          </svg>
        </span>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="h-12 w-full border-none bg-transparent p-3 text-[rgb(231,233,234)] focus:outline-none focus:ring-0"
          type="text"
          placeholder="Search"
        />
      </div>
    </form>
  )
}
