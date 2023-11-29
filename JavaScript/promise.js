console.log('today is a good day')
// setTimeout(()=>console.log("hiii"),2000)
// console.log('some action')

let promise =new Promise((resove,reject)=>{
   
        setTimeout(()=>reject(console.log("hiii"),2000))
    
        
})
promise
.then(()=>console.log('some action'))
.catch(()=>console.log('failed'))
