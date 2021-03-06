var express = require('express'),
    employees = require('./employees'),
    myEvents = require('./myEvents'),
    app = express();

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/events', employees.findAll);
app.get('/events/:id', employees.findById);
app.get('/events/:id/reports', employees.findReports);

app.get('/myEvents', myEvents.findAll);
app.get('/myEvents/:id', myEvents.findById);
app.get('/myEvents/:id/reports', myEvents.findReports);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});