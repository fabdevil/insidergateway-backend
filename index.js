const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/api/transactions/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const response = await axios.get(`https://api.solscan.io/account/transactions?address=${address}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
