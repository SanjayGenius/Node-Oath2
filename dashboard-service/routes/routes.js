const request = require('request');
const url=`http://localhost:8301/db-service/dashboard/`;
var appRouter = function(app) {
    app.get("/dashboard", function(req,res) {


            res.send("SUCCESS");
    });

    app.get("/getDashboard",function(req,res) {
        request(url+"getMessage",
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(response.statusCode+"!!!!!!!!!!!");
                    res.send(response);
                } else {
                    res.send("Error while calling dashboard details");
                }
            });
    })
}

module.exports = appRouter;