const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const memberRouter = require('./router/member');
app.use('/api', memberRouter);

app.listen(80, function() {
    console.log('server running at http://localhost:80...');
});

const goodsRouter = require('./router/goods');
app.use('/api', goodsRouter);

const cartRouter = require('./router/cart');
app.use('/api', cartRouter);