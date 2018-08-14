var express = require('express');
var app = express();

app.use(express.static("my-app"));
app.use('/', (req, res, next) => {
    console.log(req.baseUrl);
    // res.redirect('/');
})

app.listen(8080, 'localhost');
console.log("Myproject Server is Listening on port 8080");

