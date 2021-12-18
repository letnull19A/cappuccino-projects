const express = require('express');
const config = require('config');
const path = require('path');
const mongo = require('./engine/DataBase/MongoDB');
const cors = require('cors');

var m = new mongo();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api', require('./engine/Router/router.profile'));
app.use('/api', require('./engine/Router/router.reg'));
app.use('/api', require('./engine/Router/router.auth'));

app.get('/api/test/:id', (req, res) => {

    console.log(`[DEBUG] ID: ${req.params.id}`);
    res.send(`[DEBUG] ID: ${req.params.id}`);

});


function start() {
    m.Connect();
    app.listen(config.get("port"), () => console.log(`[SERVER] Server started on ${config.get("port")} port`));
}

start();