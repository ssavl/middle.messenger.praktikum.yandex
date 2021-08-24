const express = require('express')

const app = express()
const path = require('path');
const PORT = 4000;


app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/templates/index.html'));
});

app.get('/personal-account', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/templates/personal-account.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
})