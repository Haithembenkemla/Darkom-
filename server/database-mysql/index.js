const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'project'
});
connection.connect(function(err) {
  if (err)console.log(err);
  console.log("Connected to db !");
})
module.exports = connection;