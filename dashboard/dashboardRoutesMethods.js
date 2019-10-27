var request = require('request');
const url = 'http://localhost:4000/dashboard';
module.exports =  {
    viewDashboard: viewDashboard
  }
  
  function viewDashboard(req, res) {
    request(url,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(response+"!!!!!!!!!!!");
                //response = JSON.parse(body);
                res.send(response);
            } else {
                console.log(response.statusCode + response.body);
                res.send("Error while calling dashboard details");
            }
        });
   // res.send('You have gained access to the area')
  }
  