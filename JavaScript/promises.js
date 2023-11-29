// function checkout(){

//     function take(){
        
//         console.log('take money')
//     }
    
//     console.log('checking balance')
//     take()
   
// }
// console.log('enter password')
// setTimeout(checkout,4000)
// ==========================================

// promise  
setTimeout(()=>(console.log("plss..wait")),2000)

let promise=new Promise((resolve,reject)=>{
    let a=false
    if(a){
    setTimeout(()=>resolve(console.log("plz...wait")),3000)
    // setTimeout(()=>reject(console.log("plz...wait")),3000)
}else {
         setTimeout(()=>reject(console.log("plz..fgddsaf.wait")),3000)

}
})
promise.then(()=>console.log("some action")).catch(()=>console.log('error'))

