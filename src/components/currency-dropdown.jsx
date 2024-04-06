import React from 'react'
import { HiOutlineStar } from 'react-icons/hi'

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    favorites,
    handleFavorite,
    title = "",
}) => {
    
  return (
    <div className='mt-1 relative'>
      <label  className="block text-sm font-medium text-gray-700" htmlFor={title}> {title} </label>
      <div>
        <select value={currency} onChange={(e) => {setCurrency(e.target.value)}} className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1">
          {/* render favorites */}
          <hr />
          {currencies?.map((currency) => {
            return (
              <option value={currency} key={currency}> 
                   {currency}  
              </option> 
            )
          })}
        </select>
        <button onClick={handleFavorite(currency)} className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
          <HiOutlineStar />
        </button>
      </div>
    </div>
  )
}

export default CurrencyDropdown
