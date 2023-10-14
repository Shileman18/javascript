// var arr=[2,23,4,5,45,6,5,]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(... arr)

// function num(m,n){
//    setTimeout(()=>{
//     for(i=m; i<n; i++){
//         console.log(i)
//     }
//    },3000)
// } 
// function demo(){
//     console.log('numbers are printed')
// }
// num(1,999)
// demo();

// var arr=[20,30,40 ,50]
// let a=arr.filter((arr)=>{return arr>30})
// console.log(a)

// let b=arr.map((arr)=>{return arr*2})
// console.log(b)

// var arr=[202,3330,242,26,50]
// function demo(item,index){
//     console.log(index,item)
// }
// arr.forEach(demo)


var a=new Promise((resolved, reject)=>{
    var w=218;
    if(w==2){
        resolved('success')
    }
    else{
        reject('failed')
    }
})
a.then(()=>{
    console.log('this is success msg')
})
a.catch(()=>{
    console.log('this is failed msg')
})