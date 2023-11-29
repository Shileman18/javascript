
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

import http from 'http'
import express from 'express'

 const server=http.createServer();
 server.on('request',(req,response)=>{

      response.end('file_content');
    
     
 })
server.listen(4000);