var express = require('express')
var app = express();
app.get('*',(req,res)=>{
    res.sendFile(__dirname+req.path)
})
// 解决跨域问题
app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Content-Type', 'application/json;charset=utf-8');
        next();
    })
app.listen(8887, () => {
    console.log('服务启动成功,8887')
})