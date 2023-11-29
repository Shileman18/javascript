

// function longestwd(str){
//   dd=str.split(' ')
// longw=dd[0];

// for(let i=0;i<dd.length;i++){
//     if(dd[i].length>longw.length){
//         longw=dd[i]
//     }
// }
// return longw
  
// }
// let ss=longestwd(`You can also create and dispatch custom events in JavaScript`)

// console.log(ss)


// function whitespace(space){
//      dd=space.replace(/\s/g, '')
//      console.log(dd)
// }
// whitespace(`    how are  you     `)

// function vowels(str){
//     let vow='aeiouAEIOU'
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(vow.includes(str[i])){
//             count++;
//         }
//     } return count
// }
// let num=vowels(`You can also create and dispatch custom events in JavaScript`)
// console.log(num)


// function leap(year){
//     if(year%4==0 && year%400==0){
//         console.log(`${year} is leap year`)
//     }else{
//         console.log(`${year} not leap year`)
//     }}
// let year=prompt(`enter year`)
// leap(year);

// let date =new Date()
// console.log(date)


//  closures
// function num(){
// let a=10

// function as(){
    
//     return a
// }
// // 
// return as
// }
// as=num()
// console.log(as())

// let obj={
//     name:'Shileman',
//     age:22,
//     Location:'Mysore'
// }

// let str=JSON.stringify(obj)
// console.log(typeof(str))

// const myObject = { name: "John", age: 30, city: "New York" };
// const valuesArray = [];

// for (const key in myObject) {
//   valuesArray.push(myObject[key]);
// }

// console.log(valuesArray);

// let str=`javascrtip`
// let hs=str.split('').sort().join('')
// console.log(hs)

// function hh(){
//        console.log('hiii')
        
// }


// function num(hh){
     
   
//    hh()
  

// }
// let a=num()

// let num =[1,2,34,4]

// let v=num.reduce((a,b)=>a+b,0)

//  console.log(v)
// var x=10

// function d(){
//     console.log(arguments)
// }d(5,66,6,66,65,5,5)

let s=()=>{console.log(arguments)}
s(5,66,6,66,65,5,5)