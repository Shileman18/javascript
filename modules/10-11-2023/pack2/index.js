
// import {http} from 'http'
// import fs from 'fs'

//  const server=http.createServer();
//  server.on('request',(req,response)=>{

//    fs.readFile('text3.txt',(error,file_content)=>{
//       if(error) console.log(error)
     
//       response.end(file_content);
//        })
     
//  })
// server.listen(4000);


// ==========================================

// import http from 'http'
// import express from 'express'

//  const server=http.createServer();
//  server.on('request',(req,response)=>{

//       response.end('file_content');
    
     
//  })
// server.listen(4000);

// =======================

// import mysql from 'mysql'

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'shileman',
//     database : 'world'
//   });
//    connection.query(' select * from city limit 10', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', fields);
//   });

// ====================================
   
// import mysql from 'mysql'
// import http from 'http'

// const server=http.createServer();

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'shileman',
//     database : 'world'
//   });
   
//   server.on('request',(req,response)=>{
//           response.writeHead(200,{'Content-Type': 'text/html'})
//      connection.query(`select * from city limit 10`, function (error, results, fields) {
//           if (error) throw error;
//           console.log('The solution is: ',results);
//           let data=''
//           results.forEach(el =>data+=  `<h3 style='color: blue'>${el.Name}</h3>`)
         
//           response.write(data)
//           response.end();
//         });
//  });
// server.listen(4000);
  