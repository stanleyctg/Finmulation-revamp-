import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchStock() {
  // Initialise the states
  const [price, setPrice] = useState(null);
  const [symbol, setSymbol] = useState("");
  const [error, setError] = useState(null);

  // Create method for submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the route
    axios
      .post("http://localhost:5555/home", { symbol })
      .then((response) => {
        setPrice(response.data.price);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setPrice(null);
      });
  };
  // Return html input form
  return (
    <>
      <div>
        <header>
          <h1>Search Stock</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="name"
            />
            <button type="submit">Search</button>
          </form>
          {price !== null && <p>Price: { price }</p>}
          {error && <p>error</p>}
        </header>
      </div>
    </>
  );
}
export default SearchStock;
