import React, { useState } from "react";

// Function to select quantity of stocks
function SelectQuantity({ price, symbol }) {
  // Initialise constants
  const [shares, setShares] = useState(1);

  // Implement buy btn logic
  const handleBuy = () => {
    alert(`Buying ${shares} shares of ${symbol} at ${price * shares}`);
  };

  // Return component to choose quantity
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <b className="mt-5">Symbol: {symbol}</b>
      <div className="flex flex-row items-center">
        <input
          type="number"
          min={1}
          placeholder="Select Quantity"
          value={shares}
          onChange={(e) => setShares(parseInt(e.target.value))}
          className="w-40 border-solid border-2 mx-3 mt-2 py-1 px-1 border-sky-300 focus:outline-none rounded-lg text-center"
        />
        <button
          onClick={handleBuy}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:rounded-lg"
        >
          Buy
        </button>
      </div>
      <div className="mt-5 text-center">
        Total price: ${(price * shares).toFixed(2)}
      </div>
    </div>
  );
}

export default SelectQuantity;
