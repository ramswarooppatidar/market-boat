let balance = 10000; // Initial balance
let stockHeld = 0; // Initial stock held
let tradeHistory = []; // List to store trades

const executeTrade = (currentPrice) => {
    const price = parseFloat(currentPrice);

    if (stockHeld === 0 && price <= 98) {
        // Buy stock if price drops by 2%
        stockHeld = balance / price;
        balance = 0;
        tradeHistory.push({ action: 'buy', price, stockHeld });
    } else if (stockHeld > 0 && price >= 103) {
        // Sell stock if price rises by 3%
        balance = stockHeld * price;
        stockHeld = 0;
        tradeHistory.push({ action: 'sell', price, balance });
    }
};

const getTradeHistory = () => tradeHistory;

const getBalance = () => ({
    balance,
    stockHeld
});

module.exports = {
    executeTrade,
    getTradeHistory,
    getBalance
};
