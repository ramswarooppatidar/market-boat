// Generates random stock price data
const getStockPrice = () => {
    // Generate a random price between 100 and 200 for simplicity
    return (Math.random() * (200 - 100) + 100).toFixed(2);
};

module.exports = {
    getStockPrice
};
