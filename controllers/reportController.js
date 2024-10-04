const tradingLogicService = require('../services/treadingLogicServices');

const generateReport = (req, res) => {
    const history = tradingLogicService.getTradeHistory();
    const balanceInfo = tradingLogicService.getBalance();
    
    res.json({
        trades: history,
        finalBalance: balanceInfo.balance,
        stockHeld: balanceInfo.stockHeld
    });
};

module.exports = {
    generateReport
};
