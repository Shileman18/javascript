

// function har(){
//   let  a=+500
//     return 100
// }
// har()
// console.log(har())
// ================================================== 
// function all(){
// let x= arguments[0]
// for(let a=0;a<arguments.length-1;a++){
//     if(x<=arguments[a+1]){
//         x=arguments[a+1]
//     }
// }return x
// }
// let v=all(12,34,22,54,26)
// console.log(v)
// ================================================

// function reverse1(str) {
  
//     var res ="";
//        for(var i = str.length-1; i >= 0; i--){
//           res +=str[i];
//       }
//      console.log(res)
//     }
    
//     reverse1("324567")
    // =================================================


    let vk='shileman is good'
    pk=vk.split('')
       let hk= pk.charAt(0).reverse().join('')

    console.log(hk)
// ====================================================
// const secondLargestNumber = (data) => {
//   first = data[0];
//   second = data[0];
//   for (var i = 0; i < data.length; i++) {
//     if (first < data[i]){
//       second = first;
//       first = data[i];
//     }else if (second < data[i]){
//       second = data[i];
//     }
//   }
//   console.log("Second Largest Number:",second);
//  }
 
//  const arr = [62,33,12,90,10,80,24];
//  secondLargestNumber(arr);

// ============================================================
//  factorial number


// (function (n){

//   let x=1
// if(n==0||n==1){
//   x=1
// }else{
//   for(let i=n;i>0; i--){
//     x*=i
//   }}
//   console.log(x)

// })
// (4)

// ==================================================
// multiple of 2


// let x=[2,3,4,5,8,6,7]

// for(let el of x){
//   if(el%2===0){
//    console.log(el)
//   }
// }

// ===============================================

// let n=121
// let rev=0;
// let temp=n;
// while(n!=0){
// let rem= n%10;
// rev = rev*10+rem;
// n/=10;
// }
// if(temp==rev){
// console.log(temp+" is a palindrom num");
// }else{
// console.log(temp+" is not a palindrom num");

// }


// ================================
// let n=4
// var x=1
// for(let i=1;i<=n;i++){
//     x*=i
// }
// console.log(x)

// let a=20
// for(let i=1;i<=a;i++){
//     if(i<=10){
//         console.log(`2*${i}=${i*2}`)
//     }
// }

