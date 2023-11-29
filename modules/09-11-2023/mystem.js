let fs= require('fs')
 
 fs.readFile('text3.txt',(error,file_content)=>{
if(error) console.log(error)
console.log(file_content)
 })


