import React, { useEffect, useState } from "react";

const CurrencyConvertor = () => {
    const [currencies, setCurrencies] = useState([]);
    const [amount, setAmount] = useState(1);

    const fetchCurrencies =async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setCurrencies(data);
      
        } catch (error) {
            console.log("Fetching Error", error);
        }
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);

    console.log(currencies)

  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold text-gray-700 ">
        Currency Convertor
      </h2>
      <div>Dropdowns</div>
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
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
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
