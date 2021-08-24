const express = require('express')

const app = express()
const path = require('path');
const PORT = 4000;

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});





// app.get('/personal-account', function (req, res) {
//     res.sendFile(path.join(__dirname, '/static/templates/personal-account.html'));
// });

app.listen(PORT, () => console.log(`App listening to port ${PORT}`));