const express = require('express');
const config = require('config');
const path = require('path');
const mongo = require('./engine/DataBase/MongoDB');
const cors = require('cors');

var m = new mongo();
var app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/d', require('./engine/Router/router.profile'));
app.use('/api/e', require('./engine/Router/router.reg'));
app.use('/api/e', require('./engine/Router/router.auth'));


function start() {
    m.Connect();
}

start();

app.listen(config.get("port"), () => console.log(`[SERVER] Server started on ${config.get("port")} port`));