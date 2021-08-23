const express = require('express')

const app = express()
const path = require('path');
const PORT = 4000;


    app.use(express.static(__dirname + './static'));

    app.get('/', function (req, res) {
        console.log(req)
        res.sendFile(path.join(__dirname, '/static/templates/index.html'));
    });

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`);
    })