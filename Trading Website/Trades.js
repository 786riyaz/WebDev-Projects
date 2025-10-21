// For Node.js, install and import node-fetch if needed
// Run `npm install node-fetch` and uncomment the line below
// const fetch = require('node-fetch');

const headers = {
  'Accept': 'application/json'
};

async function fetchTrades(symbol) {
  try {
    const response = await fetch(`https://api.india.delta.exchange/v2/trades/${symbol}`, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example usage: Replace 'BTCUSD' with the desired trading symbol
fetchTrades('BTCUSD');