// call and apply

// let Person={
//     fullname :function(age, team){
//         return this.fname+' '+this.lname+' age '+age+' team '+team
//     }
// }

// let P1={
//     fname:'virat',
//     lname:'kohli'
// }

// let P2={
//     fname:'sachii',
//     lname:'tendu'
// }
// let out=Person.fullname.call(P1,32,'bangalore')
// console.log(out)
// let out1=Person.fullname.apply(P1, [34, 'bangalore'])
// console.log(out1)

// bind

// let Person={
//     fullname :function(age, team){
//         return this.fname+' '+this.lname+' age '+age+' team '+team
//     }
// }

// let P1={
//     fname:'virat',
//     lname:'kohli'
// }

// let P2={
//     fname:'sachii',
//     lname:'tendu'
// }
// let out=Person.fullname.bind(P1,32,'bangalore')
//  console.log(out())

// const person = {
//     name:'john',
//     greeting() {
//       return `Hello, my name is ${this.name} and I am  years old.`
//     }
//   };
  
//   const greetingJohn = person.greeting.call({});
//   console.log(greetingJohn);name:'jhhh'

getName(); // Namaste Javascript
console.log(x); // undefined
var x =7;
function getName() {
  
  console.log("Namaste Javascript");
}