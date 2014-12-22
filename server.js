var express = require('express'),
    layout = require('express-layout'),
    hbs = require('hbs'),
    app = express();

app.use(layout());
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// Supply layout in render data.
app.use(function(req, res) {
    res.render('index.html', { layout: 'layouts/layout' });
});

var port = 8080;
app.listen(port);
console.log('started: ' + port);
