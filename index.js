require('dotenv').config();
const express = require('express');
const tradeRoutes = require('./routes/treadRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(express.json());

app.use('/trade', tradeRoutes);
app.use('/report', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
