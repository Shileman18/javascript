// let a=[111,3,4,6,7,8,67,56,2,4]
// let max1=a[0]
// let secmax=a[0]

// for(let i=0;i<a.length;i++){
//     if(a[i]>max1){
//         secmax=max1
//         max1=a[i]
//     }
//     else if(a[i]>secmax){
//         secmax=a[i]
//     }
// }
// console.log(secmax)

// function countDuplicates(arr) {
//     const elementCount = {};
  
//     // Count the occurrences of each element in the array
//     arr.forEach(element => {
//       if (elementCount[element] === undefined) {
//         elementCount[element] = 1;
//       } else {
//         elementCount[element]++;
//       }
//     });
  
//     // Count the number of duplicates
//     let duplicateCount = 0;
//     for (const key in elementCount) {
//       if (elementCount[key] > 1) {
//         duplicateCount++;
//       }
//     }
  
//     return duplicateCount;
//   }
  
//   const myArray = [1, 2, 2, 3, 4, 4, 4, 5];
//   const duplicates = countDuplicates(myArray);
//   console.log(`Number of duplicate elements: ${duplicates}`);

// function countDuplicates(arr) {
//     let counts = {};
//     let duplicateCount = 0;

//     // Count occurrences of each element
//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]]) {
//             counts[arr[i]]++;
            
//         } else {
//             counts[arr[i]] = 1;
//         } 
//     } 

//     // Count elements with occurrences greater than 1
//     for (const ee in counts) {
//         if (  counts[ee] > 1) {
//             duplicateCount++;
//         }
//     }

//     return duplicateCount;
// }

// // Example usage
// const myArray = [1, 2, 3, 2, 4, 1,  6, 3, 7, 8, 9, 5];
// const result = countDuplicates(myArray);
// console.log(result); // Output: 4


// function num(arr){
// let a=0;
//     let b=1;
//     let c;

// for( let i=0; i<arr;i++){
    
//     let c=a+b;
//     console.log(c)
// a=b;
// b=c;

// // }}num(10)

// let gr=[{
//     book:"weL",
//     cost:300
// },
// {
//     book:"rhur",
//     cost:200
// },
// {
//     book:"wearL",
//     cost:100
// }

// ]
// let d=0;
// for(let i=0; i<gr.length;i++){
//     d+=gr[i].cost/gr.length
   
// }
// console.log(d)

// let q=[23,466,6,667,77,7]
// let sum=0
// for(let i=0;i<q.length;i++){
//     sum+=q[i]
// }
// console.log(sum)



// let a=10;
// let b='10';
//  if (a===b){
//     console.log('true')
//  }
//  else {
//     console.log("false")
//  }
 
