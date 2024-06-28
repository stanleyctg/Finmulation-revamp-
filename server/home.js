import yahooFinance from 'yahoo-finance2';

export const searchSymbol = async (req, res) => {
  const { symbol } = req.body;
  try {
    const result = await yahooFinance.quote(symbol);
    res.json({ price: result.regularMarketPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createChart = async (req, res) => {
  const { symbol } = req.body;
  const curDate = new Date()
  const pastDate = new Date()
  pastDate.setDate(curDate.getDate() - 7)

  try{
    const queryOptions = { period1: pastDate, period2: curDate};
    const result = await yahooFinance.historical(symbol, queryOptions);
    const closePrices = result.map(entry => entry.close.toFixed(2))
    // console.log("all good")
    res.json({ closePrices: closePrices})
  }catch(error){
    res.status(500).json({ error: error.message })
  }
}
