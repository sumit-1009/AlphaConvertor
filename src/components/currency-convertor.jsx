import React, { useEffect, useState } from "react";
import CurrencyDropdown from "./currency-dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrencyConvertor = () => {
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    const fetchCurrencies =async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setCurrencies(Object.keys(data));
      
        } catch (error) {
            console.log("Fetching Error", error);
        }
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);

    console.log(currencies)

    const convertCurrency = () => {

    }

    const handleFavorite = (currency) => {

    }

    const swapCurrencies = () => {
      setFromCurrency(toCurrency)
      setToCurrency(fromCurrency)
    }

  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold text-gray-700 ">
        Currency Convertor
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <CurrencyDropdown 
              currencies={currencies} 
              title="From:"
              currency={fromCurrency}
              setCurrency={setFromCurrency}
              handleFavorite={handleFavorite}
        />
        {/* Swap Currencies  */}
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <CurrencyDropdown 
              currencies={currencies} 
              title="To:" 
              currency={toCurrency}
              setCurrency={setToCurrency}
              handleFavorite={handleFavorite}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          value={amount} onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button onClick={convertCurrency}
         className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
          Convertor
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount: 
      </div>
    </div>
  );
};

export default CurrencyConvertor;
