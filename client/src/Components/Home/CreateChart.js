import React, { useState } from "react";
import axios from "axios";
import SearchStock from "./SearchStock";
// import OtherComponent from "./OtherComponent";

function StockApp({symbol}) {
    // alert(symbol);
    const [closePrices, setClosePrices] = useState([])
    axios.post("http://localhost:5555/chart", { symbol })
    .then((response) => {
        setClosePrices(response.data.closePrices);
        // alert(closePrices);
    }).catch((error) => {
        console.error("There was an error", error)
    })

    return(
        <div> { closePrices } </div>
    )
}

export default StockApp;
