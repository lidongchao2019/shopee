const express = require('express');
const app = express();

const memberRouter = require('./router/member');
app.use('/api', memberRouter);

const goodsRouter = require('./router/goods');
app.use('/api', goodsRouter);

const cartRouter = require('./router/cart');
app.use('/api', cartRouter);

app.listen(80, (req, res) => {
    console.log('server starting at 80...');
});