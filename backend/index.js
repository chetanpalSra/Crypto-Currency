const express = require('express');

const app = express();
const port = 7002; // You can choose any port

const cors = require('cors');

app.use(cors());

// API endpoint that proxies the request to CoinMarketCap
app.get('/api/crypto', async (req, res) => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=INR', {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': '6bcb664e-cbbf-4152-8a77-30c81981023e',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Error: ${response.statusText}` });
    }

    const Crypto_data = await response.json();
    res.status(200).json(Crypto_data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
