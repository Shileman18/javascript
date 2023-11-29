// let http=require('http')
// let formidable=require('formidable')


// let inital_data=`<!DOCTYPE html>
// <html lang="en">
// <head>
//   <title>Bootstrap Example</title>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
// </head>
// <body>

// <div class="container ">
//   <h2 class='text-center'>REGISTER HERE!!</h2>
//   <form action="/" method ='post'>
//     <div class="form-group">
//       <label for="email">Email:</label>
//       <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
//     </div>
//     <div class="form-group">
//       <label for="pwd">Password:</label>
//       <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
//     </div>
    
//     <button type="submit" class="btn btn-default">Submit</button>
//   </form>
// </div>

// </body>
// </html>
// `
//  const server=http.createServer();
//  server.on('request',(req,response)=>{
//         response.writeHead(200,{'content-type':'text/html'})
//         if(req.method ==='POST'){
//             console.log(req.body)
//             response.end('welCOME  to post');
//         }else{
//             response.end(inital_data); 
//         }
    
//  })
// server.listen(4000);

//=============================================

// import express from "express"
// import formidable from'formidable'

// const app=express();
// app.get('/', (req,res)=>{res.send(inital_data)})
// app.get('/contact', (req,res)=>{res.send('contact page')})
// app.get('/about', (req,res)=>{res.send('about page')})
// app.get('/login', (req,res)=>{res.send('login page')})
// app.get('/others', (req,res)=>{res.send('others page')})

// app.post('/',(req,res,next)=>{
//   const form=formidable({});
//   form.parse(req,(err,fields,files)=>{
//     if(err){
//       next(err);
//       return;
//     }
//     res.send(fields['email'][0])
//   })
// })
// app.listen(4000)
// ===========================================


import express from "express"
import formidable from'formidable'
import mysql from 'mysql'

const app=express();

let inital_data=`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container mt-3 ">
  <h2 class='text-center'>REGISTER HERE!!</h2>
  <form action="/" method ='post' enctype ="multipart/form-data">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
      <input type="file" class="form-control" name="profile_pic">
    </div>
    
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>

</body>
</html>
`


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'shileman',
    database : 'student'
  });



app.get('/', (req,res)=>{res.send(inital_data)})
app.get('/contact', (req,res)=>{res.send('contact page')})
app.get('/about', (req,res)=>{res.send('about page')})
app.get('/login', (req,res)=>{res.send('login page')})
app.get('/others', (req,res)=>{res.send('others page')})

app.post('/',(req,res,next)=>{
  const form=formidable({});
  form.parse(req,(err,fields,files)=>{
    if(err){
      next(err);
      return;
    }
    let email=fields['email'][0]
    let password=fields['pwd'][0]
    let profile_pic=files.profile_pic[0]
    console.log(profile_pic)
    let qry1=`INSERT INTO reg_data VALUES('${email}','${password}' )`

    console.log(qry1)
    connection.query(qry1, function (error, results) {
    if (error) throw error;
   res.send('successfully ');
       });
  });
});
app.listen(3000)