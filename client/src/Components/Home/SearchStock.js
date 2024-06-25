import React, { useState } from "react";
import axios from "axios";
import SelectQuantity from "./SelectQuantity";

// Component to search stock
function SearchStock() {
  // Initialise the constants
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  // Implement the logic for submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve data from server
    axios
      .post("http://localhost:5555/home", { symbol })
      .then((response) => {
        setPrice(response.data.price);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        alert(error);
        setPrice(null);
      });
  };

  // Return the search component
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex flex-row items-center">
          <form onSubmit={handleSubmit}>
            <input
              className="border-solid border-2 border-sky-500 rounded-lg p-2 focus:outline-none w-64 text-center"
              value={symbol}
              onChange={(e) => {
                setSymbol(e.target.value);
                setPrice(null);
              }}
              placeholder="Enter symbol"
              type="text"
            />
            <button
              className="mx-2 bg-blue-500 hover:bg-blue-700 hover:rounded-lg text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="mt-5">
          {price !== null && symbol !== "" ? (
            <>
              <SelectQuantity
                price={price}
                symbol={symbol.toUpperCase()}
              />
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchStock;
