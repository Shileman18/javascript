
//  const date=new Date(prompt('enter date'))
//  num=date.getTime()
//  console.log(num)

// function ff(n){
//     if(n==0||n==1){
//    return 1
// }else{
//     return(n*ff(n-1))
//  }
// }
// mm=ff(5)
// console.log(mm)

// let num=Number(prompt(`enter the number`))
// if(Number.isInteger(num)){
//     console.log(`given number ${num} is integer`)
// }else{
//     console.log(`given number ${num} is Float`)
// }



// let a1=[1,2,3,4]
// let a2=[5,6,7]

// let a3=[...a1,...a2]
// console.log(a3)

// function countKeyOccurrences(arrayOfObjects, key) {
//     let count = 0;
//     for (let i = 0; i < arrayOfObjects.length; i++) {
//         if (key in arrayOfObjects[i]) {
//             count++;
//         }
//     }
//     return count;
// }

// // Example usage:
// const arrayOfObjects = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 }
// ];

// const keyToCount = "age";
// const result = countKeyOccurrences(arrayOfObjects, keyToCount);

// console.log(`The key ${keyToCount} appears ${result} times.`);





// function countDuplicates(array, key) {
//     return array.reduce((accumulator, currentValue) => {
//       if (accumulator[currentValue[key]]) {
//         accumulator[currentValue[key]]++;
//       } else {
//         accumulator[currentValue[key]] = 1;
//       }
//       return accumulator;
//     }, {});
//   }
//   const array = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Alice", age: 25 }];

// const duplicates = countDuplicates(array, "name");

// console.log(duplicates);


// function countRepeated(arr, key) {
   
//     return arr.reduce((countValue, item) => {
//       const value = item[key];
//        countValue[value] = (countValue[value] || 0) + 1;
      
//       return countValue;
//     },{});
//   }
  
  
//   const data = [
//     {  name: 'virat',age:30 },
//     {  name: 'rohit',age:35 },
//     {  name: 'virat' ,age:30 },
//     {  name: 'dhoni' ,age:38 },
//     {  name: 'virat' ,age:30 },
//     {  name: 'dhoni',age:40  }
//   ];
  
//   const repeatedCount = countRepeated(data, 'name');
//   console.log(repeatedCount);
  

// const togglePrint = (function () {
//   let isOn = false;

//   return function () {
//       isOn = !isOn;
//       const status = isOn ? "on" : "off";
//       console.log(status);
//   };
// })();

// // Example: Call togglePrint() to see the output
// togglePrint();
// togglePrint();
// togglePrint();

// function rotateStringLeft(s, k) {
//   if (!s || typeof s !== 'string') {
//     return s;
//   }

//   k = k % s.length;  // Ensure k is within the length of the string
//   const rotatedString = s.slice(k) + s.slice(0, k);

//   return rotatedString;
// }

// // Example usage:
// const originalString = "abcdef";
// const rotationAmount = 4;
// const result = rotateStringLeft(originalString, rotationAmount);

// console.log(`Original string: ${originalString}`);
// console.log(`Rotated string to the left by ${rotationAmount} positions: ${result}`);

// ==========================

// function rotateLeft(str, d) {
//   var temp = str.substring(d, str.length);
//   st = str.substring(0, d);
//   sr = temp + st;
//   return sr;
// }

// var str = "World!";
// var d = 2;

// console.log(rotateLeft(str, d)); 
// console.log(rotateRight(str, d)); 
// ====================================
// function replaceNextLetter(str) {
 
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
  
//     let nextChar = String.fromCharCode(str.charCodeAt(i) + 1);

  
//     result += nextChar;
//   }

//   return result;
// }

// const str = "hello";
// const result = replaceNextLetter(str);
// console.log(result);



