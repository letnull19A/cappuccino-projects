const express = require('express');
const config = require('config');
const path = require('path');
const mongo = require('./engine/DataBase/MongoDB');

var m = new mongo();
var app = express();

app.use(require('cors')({
    origin: 'http://localhost:3000'
}));
app.use(express.json({ extended: true }));

app.use('/api', require('./engine/Router/router.reg'));
app.use('/api', require('./engine/Router/router.auth'));

function start() {
    m.Connect();
}

start();

app.listen(config.get("port"), () => console.log('[SERVER] Server started'));