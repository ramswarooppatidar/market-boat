const trades = [];

const addTrade = (action, price, amount) => {
    const trade = {
        action,
        price,
        amount,
        date: new Date().toISOString()
    };
    trades.push(trade);
};

const getAllTrades = () => {
    return trades;
};

module.exports = {
    addTrade,
    getAllTrades
};
