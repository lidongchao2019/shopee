//导入express框架
const express = require('express');
const app = express();

//配置cors跨域
const cors = require('cors');
app.use(cors());

//配置JWT认证
const expressJWT = require('express-jwt');
const CONFIG = require('./config/config');
const unlesspath = [
    '/api/member/login',
    '/api/member/register',
    '/api/goods/getlist',
    '/api/goods/getinfo'
];
app.use(expressJWT({ secret: CONFIG.JWT_SECRET }).unless({ path: unlesspath }));

app.use(function(err,req,res,next){
    if(err.name=='UnauthorizedError'){
        return res.send(CONFIG.USER_TOKEN_INVALID);
    }
    next();
});

//配置解析表单数据
app.use(express.urlencoded({ extended: false }));


//定义各模块路由
const memberRouter = require('./router/member');
app.use('/api', memberRouter);

const goodsRouter = require('./router/goods');
app.use('/api', goodsRouter);

const cartRouter = require('./router/cart');
app.use('/api', cartRouter);

//启动服务
app.listen(80, function () {
    console.log('server running at http://localhost:80...');
});