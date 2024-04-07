import React from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi'

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    favorites,
    handleFavorite,
    title = "",
}) => {


  const isFavorites = curr => favorites.includes(curr);
    
  return (
    <div className='mt-1 relative'>
      <label  className="block text-sm font-medium text-gray-700" htmlFor={title}> {title} </label>
      <div>
        <select value={currency} onChange={(e) => {setCurrency(e.target.value)}} className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1">
          {favorites.map((currency) => {
            return <option className='bg-gray-200' value={currency} key={currency}> 
                   {currency}  
              </option>
          })}
          <hr />
          {currencies
           .filter((c) => !favorites.includes(c))
           .map((currency) => {
            return (
              <option value={currency} key={currency}> 
                   {currency}  
              </option> 
            )
          })}
        </select>
        <button onClick={handleFavorite(currency)} className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
          {isFavorites(currency) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  )
}

export default CurrencyDropdown
