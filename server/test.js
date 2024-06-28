import yahooFinance from "yahoo-finance2";

const curDate = new Date()
const pastDate = new Date()
pastDate.setDate(curDate.getDate() - 7)

const query = 'TSLA';
const queryOptions = { period1: pastDate, period2: curDate};
const result = await yahooFinance.historical(query, queryOptions);

const closePrices = result.map(entry => entry.close.toFixed(2))

console.log(closePrices)
