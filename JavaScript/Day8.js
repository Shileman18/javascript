// function outer(){
//     console.log('outer function ')
//     function inner(){
// console.log('inner function')
//     }
//     inner();
// }
// outer();


// var a=10;
// function outer(){
//     var b=30;
//     function inner(){
// console.log(a)
// console.log(b)
//     }
//     inner();
// }
// outer();

// function sum(){
// var a=10;
// var b=30;
// return a+b;
// } console.log(sum ());

// var demo=function(){
//     var a=10;
//     var b=50;
//     return a+b;
// }
// console.log(demo());

// var add=(a,b)=>{return a+b} //or a+b
// console.log(add(13,3))

// var prod=(a,b)=>a*b
// console.log(prod(44,10))

// var div=(c,d)=>c/d
// console.log(div(10,5))

// (function a(){
//     console.log('king')
// })()
// var a=(()=>{
// console.log('hello')
// })()

// function a(){
//     return function b(){
//        console.log('virat ,nn09m')
// }}
// a()();// or |var d=a();
//             |   //d();

 
const lab=(rn)=>{

    if(rn==1){
        return function(topic){
            console.log(`hai rollnumber ${rn} plz write a program for ${topic} `)
        }
    }
    if(rn==2){
        return function(topic){
            console.log(`hai rollnumber ${rn} plz write a program for ${topic}`)
        } }
        else {
            return function(topic){
                console.log("plz enter valid rollnumber")
            }

        }

    }

lab(2)("bubble sort");
lab(5)("reverse a string")