
// const str = 'Today is good day';

// const arr = str.split(" ");

// const vk=arr.reverse().join(" ")
// console.log(vk)
// ====================================================================
// let num=parseInt(prompt(`Enter the number:`))
// let a=0;
// let b=1;
// let c;
// for(let i=1; i<=num; i++){
//         console.log(a);
//         c=a+b;
//         a=b;
//         b=c;
// }
// ============================================================
// function find3rdMaxNumber(arr) {
//         if (arr.length === 0) {
//           return undefined; 
//         }
      
//         let max1 = -Infinity; 
//         let secmax =-Infinity;
//         let thmax=-Infinity 
      
//         for (let i = 0; i < arr.length; i++) {
//           if (arr[i] > max1) {
//               thmax=secmax
//             secmax=max1
//             max1 = arr[i]; 
//           }
//           else if(arr[i]>secmax){
//             thmax=secmax
//             secmax=arr[i]
//           }
//           else if(arr[i]>thmax){
//             thmax=arr[i]
//           }
//         }
//       return thmax
      
// }
//       let x=[107,5 , 12, 7, ,42, 3, 9,89]
//     console.log(find3rdMaxNumber(x))
    
// // ===========================================================
// function check_palindrome(str) {
//         let j = str.length - 1;
//         for (let i = 0; i < j/2; i++) {
//             let x = str[i];//forward character 
//             let y = str[j - i];//backward character
//             if (x != y) {
//                 // return false if string not match
//                 return false;
//             }
//         }
//         /// return true if string is palindrome
//         return true;
     
//     }
//     console.log(check_palindrome('ggabccbagg'))
     
// ================================================================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function vk(){
// // Use the filter method to get even numbers
//  console.log(numbers.filter(number => number % 2 === 0))
// }vk()
// console.log(vk()); 

// ===================================================

// let num=parseInt(prompt(`enter the number`))

// if(num%2==0){
// console.log(`given ${num} number is even`)
// }
// else if (num%2!=0){
//         console.log(`given ${num} number is odd`)
// }

// =========================================================
// let x=['virat','airat','wirat','gvirat','virat','tirat','rirat']
// vk=x.sort()
// console.log(vk)

// const myArray = [5, 2, 9, 1, 5, 6];
// const sortedArray = myArray.sort((a, b) =>a-b);
// console.log(sortedArray);
// ===================================================
// function getEvenNumbers(arr) {
//     // Use the filter method to create a new array containing only even numbers
//     const evenNumbers = arr.filter(number => number % 2 === 0);
//     return evenNumbers;
//   }
  
//   // Example usage:
//   const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
//   const evenNumbersArray = getEvenNumbers(myArray);
//   console.log(evenNumbersArray);
// ===================================================
// function min(arr){

// let min=Infinity
// let secmin=Infinity
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<min){
//     secmin=min
//     min =arr[i]
 
//   }
//   else if(arr[i]<secmin){
//     secmin=arr[i]

//   }
// }
// return secmin
// }
// let a=[2,32,34,53,12,4,345,534,1,234]
// console.log(min(a))

// ==============================================


// const array = [{ age: 18 }, { age: 20 }, { age: 22 }];

// const average = array.reduce((acc, cur) => acc + cur.age, 0) / array.length;

// console.log(average); // 20

//  This code first uses the reduce() method to reduce the array of objects to a single value, which is the sum of all of the ages. The reduce() method takes two arguments: a callback function and an initial value. The callback function is called for each element in the array, and the initial value is used as the starting value for the accumulator. In this case, the callback function is simply a function that adds the age of the current object to the accumulator. The initial value is 0, so the accumulator will start at 0 and then be incremented by the age of each object in the array.
// After the reduce() method has been executed, the result is divided by the length of the array to get the average age. In this case, the average age is 20.
// Ask a follow up+
// let var_bio6 = 'Sachin RameshTendulkar,is a Indian former '
// console.log(var_bio6.length)

// let df;
// console.log(df)/

// let quote = "He said, \"I learned from freeCodeCamp!\"";
// console.log(quote); // He said, "I learned from freeCodeCamp!"

// let apostrophe = 'It\'s a beautiful day';
// console.log(apostrophe); // It's a beautiful day



let ab=[1,23,'fs',3,'frewf',54,'set']

console.log(typeof(ab))