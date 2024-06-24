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
