import mysql from 'mysql'

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
  });
   
  connection.connect();
  
   
  connection.query(' select * from city limit 10', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
   
  connection.end();