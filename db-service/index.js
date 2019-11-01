var express = require("express");
require('./sqlconfig/config.js');
var app = express();
const port = 8096
require('./eurekahelper/eureka-helper').registerWithEureka('dashboard-service', port);
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST,DELETE,PUT");
    next();
  });
  var routes = require("./routes/routes.js")(app);
  var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
})