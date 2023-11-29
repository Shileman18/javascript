// let str=['java','css','html','javascript']
// str.push('web')
// console.log(str)
// str.pop()
// console.log(str)
// str.unshift('python')
// console.log(str)
// str.shift()
// console.log(str)
// let str2=str.slice(2,3)
// console.log(str2)
// str.splice(2,2,1)
// console.log(str)
// let str2=str.sort()
// console.log(str2)
// str2.reverse()
// console.log(str2)

// let str='iAmNajeer'
// let str1=str.replace(/(?=[A-Z])/g,'_')
// console.log(str1)

// let arr=[2,4,56,66,5,23];
// let min=Math.min(...arr);
// console.log(min)

// let a=[10,20,30,40,50,60]
// let max=a[0]
// let sec_max=a[0]
// let min=a[0]
// let sec_min=a[0]
// for(let i=0;i<a.length;i++){
//     if(a[i]>max){
//         sec_max=max
//     max=a[i]
// }
//     if(a[i]<min){
//     sec_min=min
//     min=a[i]
// }
// }
// console.log(`${max},is largest value`)
// console.log(`${sec_max},is 2nd largest value`)
// console.log(`${min},is lowest value`)
// console.log(`${sec_min},is 2nd lowest value`)

// let arr=[20,40,60,8,78,5]
// min=arr[0]
// sec_min=arr[0]
// third_min=arr[0]
// for(i= 0; i<arr.length;i++){
//     if(arr[i]<min){
//         sec_min=min
//         min=arr[i]
//     }else if(arr[i]<sec_min){
//         third_min=sec_min
//         sec_min=arr[i]
//     }
// }
// console.log(min)
// console.log(sec_min(20,40,60,8,78,5))
// console.log(third_min)


// let camelCaseString = "GeeksForGeeks"; 
// let myStr = camelCaseString.split(/(?=[A-Z])/); 
// let snakeCaseString = myStr.join('_').toLowerCase(); 
// console.log(snakeCaseString);
// or

// let a='iAmNajeer'
// let b=a.split(/(?=[A-Z])/)
// console.log(b)
// for (let i=0;i<=b.length-1;i++){
//    b[i]=b[i].toLowerCase().charAt(0)+b[i].slice(1)
// }
// let arr=b.join('_')
// console.log(arr)

// or
// function chec(a){
//     let b=a.split(/(?=[A-Z])/)
//     console.log(b)
//     for (let i=0;i<=b.length-1;i++){
//        b[i]=b[i].toLowerCase().charAt(0)+b[i].slice(1)
//     }
//     let arr=b.join('_')
//     return arr
//     }
//     console.log(chec('iAmNajeer'))

