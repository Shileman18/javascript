// function myFunc2(xxxx, yyy,a,b,c,s,d,d,d,d,d,){
//     console.log(`Hi ${xxxx} ${yyy}, I just invoked 2 !!`)
// }

// myFunc2("Sachin")

// myFunc2()

// myFunc2("Sachin", "Ramesh", 'sadsad')


// function add(x, y)
// {
//     return "x + y"
// }

// function add()
// {
//     let x = 10
//     let y = 20
//     return x + y
// }



// var numbers = [1, 2, 3, 4, 5,9];


// var largest = numbers[0];


// for (var i = 0; i < numbers.length; i++) {

 
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }


// console.log("The largest number is " + largest);




// function name(){


//     return
// }
// name()


// function sum(a,b){
//    console.log(arguments)
// let c=a+b

// console.log(c)
// }
// sum(20,30)

const str = 'i have learned something new today';

//split the above string into an array of strings 
//whenever a blank space is encountered

const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);

//

let x=200
function num(){
x=500
console.log(x) 


}
function smth(){


return () => {console.log(num())}

}smth()()

