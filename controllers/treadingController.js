const stockPriceService = require('../services/stockPriceServices');
const treadingLogicService = require('../services/treadingLogicServices');

const trade = (req, res) => {
    const currentPrice = stockPriceService.getStockPrice();
    treadingLogicService.executeTrade(currentPrice);
    res.json({
        message: 'Trade executed',
        currentPrice,
        status: treadingLogicService.getBalance()
    });
};

module.exports = {
    trade
};
