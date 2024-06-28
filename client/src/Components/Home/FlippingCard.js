import React, { useState, useEffect } from "react";
import SelectQuantity from "./SelectQuantity"; // Ensure the path is correct
import "./FlippingCard.css"; // Ensure this CSS file is created for styles

// Pass in the components, so the card can be reused to store different data
function FlippingCard({ price, symbol }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (price && symbol) {
      const timer = setTimeout(() => {
        setFlipped(true);
      }, 200); // 1 second delay

      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="flex flex-row w-screen px-32 pt-5">
      <div className={`flipping-card ${flipped ? "flipped" : ""}`}>
        <div className="flipping-card-inner mt-5">
          <div className="flipping-card-front shadow-lg bg-card3">
          </div>
          <div className="flipping-card-back shadow-lg bg-card3">
            {/* <SelectQuantity price={price.toFixed(2)} symbol={symbol.toUpperCase()} /> */}
          </div>
        </div>
      </div>      

      <div className={`flipping-card ${flipped ? "flipped" : ""}`}>
        <div className="flipping-card-inner mt-5">
          <div className="flipping-card-front shadow-lg bg-card1">
          </div>
          <div className="flipping-card-back shadow-lg bg-card1">
            <SelectQuantity price={price.toFixed(2)} symbol={symbol.toUpperCase()} />
          </div>
        </div>
      </div>      

      <div className={`flipping-card ${flipped ? "flipped" : ""}`}>
        <div className="flipping-card-inner mt-5">
          <div className="flipping-card-front shadow-lg bg-secondary">
          </div>
          <div className="flipping-card-back shadow-lg bg-secondary">
            {/* <SelectQuantity price={price.toFixed(2)} symbol={symbol.toUpperCase()} /> */}
          </div>
        </div>
      </div>      
    </div>

  );
}

export default FlippingCard;
