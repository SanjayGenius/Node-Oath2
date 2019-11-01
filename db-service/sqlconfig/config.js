const mariadb = require('mariadb');
const connection = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     database:'do',
     password: 'sanjay',
     connectionLimit: 5
});
connection.getConnection()




// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'sanjay',
//   database : 'u71'
// });


// connection.connect(function(err) {
//   if (err) throw err
//   console.log('You are now connected with mysql database...')
// })
module.exports = connection;